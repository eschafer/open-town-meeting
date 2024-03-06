import { camelCase, merge, snakeCase } from 'lodash';
import {
  mapKeysToCamelCase,
  mapKeysToSnakeCase,
  getUnixTimestamp,
  tables,
} from './helpers';

import type { GraphQLResolveInfo } from 'graphql';
import type { Path } from 'graphql/jsutils/Path';

type ResolverConfig = {
  singularName: string;
  pluralName: string;
  tableName: string;
  idName: string;
  nested?: Array<ResolverConfig>;
  nestedGroup?: Array<ResolverConfig>;
};

type ResolverContext = {
  db: D1Database;
};

type ResolverFunction = (
  root: Record<string, unknown>,
  args: {
    filter: Record<string, unknown>;
    id: number;
    input: Record<string, unknown>;
  },
  context: ResolverContext,
  info: GraphQLResolveInfo,
) => Promise<unknown>;

type Resolvers = {
  [typeName: string]: {
    [fieldName: string]: ResolverFunction;
  };
};

const createNestedResolver = (
  { singularName, tableName, idName }: ResolverConfig,
  parentSingularName: string,
) => {
  const nestedResolver: { [key: string]: { [key: string]: ResolverFunction } } =
    {
      [parentSingularName.charAt(0).toUpperCase() +
      parentSingularName.slice(1)]: {
        [singularName]: async (root, args, context, info) => {
          // If the type of the nested group is the same as an ancestor type,
          // return null to prevent circular queries.
          let currentPath: Path | undefined = info.path;
          while (currentPath) {
            if (
              currentPath.typename ===
              singularName.charAt(0).toUpperCase() + singularName.slice(1)
            ) {
              // throw new Error('Circular query detected.');
            }
            currentPath = currentPath.prev;
          }

          if (!root[camelCase(idName)]) {
            return null;
          }

          if (!Object.keys(tables).includes(tableName)) {
            throw new Error(`Invalid table name: ${tableName}`);
          }

          if (tables[tableName as keyof typeof tables] !== idName) {
            throw new Error(
              `Invalid id name for table ${tableName}: ${idName}`,
            );
          }

          const ps = context.db
            .prepare(`SELECT * from ${tableName} WHERE ${idName} = ?`)
            .bind(root[camelCase(idName)]);
          const data = await ps.all();

          if (data.results.length === 0) {
            return null;
          }

          const result = mapKeysToCamelCase(data.results[0]);

          if (!data.success) {
            throw new Error(
              `No ${tableName} found with id ${root[camelCase(idName)]}`,
            );
          }
          return result;
        },
      },
    };

  return nestedResolver;
};

const createNestedGroupResolver = (
  { singularName, pluralName, tableName, idName }: ResolverConfig,
  parentSingularName: string,
  parentIdName: string,
): Record<string, Record<string, unknown>> => {
  const nestedGroupResolver: {
    [key: string]: { [key: string]: ResolverFunction };
  } = {
    [parentSingularName.charAt(0).toUpperCase() + parentSingularName.slice(1)]:
      {
        [pluralName]: async (
          root,
          args,
          context,
          info: GraphQLResolveInfo,
        ): Promise<Record<string, unknown>[] | null> => {
          // If the type of the nested group is the same as an ancestor type,
          // return null to prevent circular queries.
          let currentPath: Path | undefined = info.path;
          while (currentPath) {
            if (
              currentPath.typename ===
              singularName.charAt(0).toUpperCase() + singularName.slice(1)
            ) {
              // throw new Error('Circular query detected.');
            }
            currentPath = currentPath.prev;
          }

          if (!root[camelCase(parentIdName)]) {
            return null;
          }
          const ps = context.db
            .prepare(`SELECT * from ${tableName} WHERE ${parentIdName} = ?`)
            .bind(root[camelCase(parentIdName)]);
          const data = await ps.all();

          if (data.results.length === 0) {
            return null;
          }

          // const result = mapKeysToCamelCase(data.results[0]);
          const result = data.results.map(mapKeysToCamelCase);

          if (!data.success) {
            throw new Error(
              `No ${tableName} found with id ${root[camelCase(idName)]}`,
            );
          }
          return result;
        },
      },
  };

  return nestedGroupResolver;
};

const createNestedResolvers = (config: ResolverConfig): Resolvers[] => {
  const { nested } = config;
  if (!nested || nested.length === 0) {
    return [];
  }

  return nested.map((type) => {
    return createNestedResolver(type, config.singularName);
  });
};

const createNestedGroupResolvers = (config: ResolverConfig): Resolvers[] => {
  const { nestedGroup } = config;
  if (!nestedGroup || nestedGroup.length === 0) {
    return [];
  }

  return nestedGroup.map((type) => {
    return createNestedGroupResolver(type, config.singularName, config.idName);
  });
};

/*
 * Create resolvers for a given type
 */
export const createResolvers = (
  config: ResolverConfig,
): Record<string, Record<string, unknown>> => {
  // Create resolvers for nested types
  const nestedResolvers: Resolvers[] = createNestedResolvers(config);

  // Create resolvers for nested groups
  const nestedGroupResolvers: Resolvers[] = createNestedGroupResolvers(config);

  // Merge all resolvers
  const otherResolvers: Resolvers = merge(
    {},
    ...nestedResolvers,
    ...nestedGroupResolvers,
  );

  const { singularName, pluralName, tableName, idName } = config;
  const listQueryName = `all${pluralName.charAt(0).toUpperCase() + pluralName.slice(1)}`;
  const itemQueryName = `${singularName}ById`;

  // Create resolvers for the main type
  const queryObject: { [key: string]: ResolverFunction } = {
    [listQueryName]: async (root, args, context) => {
      let query = `SELECT * from ${tableName}`;
      const values: unknown[] = [];

      // If there are filters, add them to the query
      if (args.filter) {
        const filter = mapKeysToSnakeCase(args.filter);
        const filters = Object.entries(filter);

        const processFilter = (filterKeyCamelCase, filterValue) => {
          const filterKey = snakeCase(filterKeyCamelCase);
          const conditions = [];
          if (filterValue && typeof filterValue === 'object') {
            const innerFilters = Object.entries(filterValue);
            innerFilters.forEach(([innerKey, innerValue]) => {
              switch (innerKey) {
                // null filters
                case 'isNull':
                  conditions.push(
                    `${filterKey} IS ${innerValue ? 'NULL' : 'NOT NULL'}`,
                  );
                  break;

                // number and ISO date (YYYY-MM-DD) filters
                case 'eq':
                  values.push(innerValue);
                  conditions.push(`${filterKey} = ?`);
                  break;
                case 'ne':
                  values.push(innerValue);
                  conditions.push(`${filterKey} != ?`);
                  break;
                case 'gt':
                  values.push(innerValue);
                  conditions.push(`${filterKey} > ?`);
                  break;
                case 'gte':
                  values.push(innerValue);
                  conditions.push(`${filterKey} >= ?`);
                  break;
                case 'lt':
                  values.push(innerValue);
                  conditions.push(`${filterKey} < ?`);
                  break;
                case 'lte':
                  values.push(innerValue);
                  conditions.push(`${filterKey} <= ?`);
                  break;

                // string filters
                case 'exact':
                  values.push(innerValue);
                  conditions.push(`${filterKey} = ?`);
                  break;
                case 'contains':
                  values.push(`%${innerValue}%`);
                  conditions.push(`${filterKey} LIKE ?`);
                  break;
                case 'startsWith':
                  values.push(`${innerValue}%`);
                  conditions.push(`${filterKey} LIKE ?`);
                  break;
                case 'endsWith':
                  values.push(`%${innerValue}`);
                  conditions.push(`${filterKey} LIKE ?`);
                  break;

                default:
                  throw new Error(`Invalid filter key: ${innerKey}`);
              }
            });
          } else {
            values.push(filterValue);
            conditions.push(`${filterKey} = ?`);
          }
          return conditions.join(' AND ');
        };

        const conditions = filters.map(([key, value]) =>
          processFilter(key, value),
        );
        query += ` WHERE ${conditions.join(' AND ')}`;
      }

      const ps = context.db.prepare(query).bind(...values);
      const data = await ps.all();

      const results = data.results.map(mapKeysToCamelCase);

      return results;
    },
    [itemQueryName]: async (
      root,
      args,
      context,
    ): Promise<Record<string, unknown> | null> => {
      if (!args.id) {
        return null;
      }

      const ps = context.db
        .prepare(`SELECT * from ${tableName} WHERE ${idName} = ?`)
        .bind(args.id);
      const data = await ps.all();

      if (data.results.length === 0) {
        return null;
      }

      const result = mapKeysToCamelCase(data.results[0]);

      if (!data.success) {
        throw new Error(`No ${tableName} found with id ${args.id}`);
      }

      return result;
    },
  };

  // Create resolvers for mutations
  const mutationObject: {
    [key: string]: ResolverFunction;
  } = {
    [`create${singularName.charAt(0).toUpperCase() + singularName.slice(1)}`]:
      async (root, args, context) => {
        const timestamp = getUnixTimestamp();

        const input = Object.assign({}, mapKeysToSnakeCase(args.input), {
          created_at: timestamp,
          updated_at: timestamp,
        });

        const keys = Object.keys(input);
        const values = Object.values(input);
        const placeholders = keys.map(() => '?').join(', ');
        const query = `INSERT INTO ${tableName} (${keys.join(
          ', ',
        )}) VALUES (${placeholders})`;

        const ps = context.db.prepare(query).bind(...values);
        const data = await ps.all();

        if (!data.success) {
          throw new Error(`Failed to create ${singularName}`);
        }

        return {
          ...args.input,
          [camelCase(idName)]: data.meta.last_row_id,
          createdAt: timestamp,
          updatedAt: timestamp,
        };
      },
    [`update${singularName.charAt(0).toUpperCase() + singularName.slice(1)}`]:
      async (root, args, context) => {
        const timestamp = getUnixTimestamp();

        if (!args.id) {
          throw new Error(`No ${tableName} found with id ${args.id}`);
        }

        const input = Object.assign({}, mapKeysToSnakeCase(args.input), {
          updated_at: timestamp,
        });

        const keys = Object.keys(input);
        const values = Object.values(input);
        const placeholders = keys.map((key) => `${key} = ?`).join(', ');
        const query = `UPDATE ${tableName} SET ${placeholders} WHERE ${idName} = ? LIMIT 1`;

        const ps = context.db.prepare(query).bind(...values, args.id);
        const data = await ps.all();

        if (!data.success) {
          throw new Error(`Failed to update ${singularName}`);
        }

        // After the update, select the updated row
        const selectQuery = `SELECT * FROM ${tableName} WHERE ${idName} = ?`;
        const selectPs = context.db.prepare(selectQuery).bind(args.id);
        const updatedData = await selectPs.all();

        // Convert the updated row to camel case
        return mapKeysToCamelCase(updatedData.results[0]);
      },
    /*[`delete${singularName.charAt(0).toUpperCase() + singularName.slice(1)}`]:
      async (root, args, context) => {
        if (!args.id) {
          throw new Error(`No ${tableName} found with id ${args.id}`);
        }

        // First, select the current row
        const selectQuery = `SELECT * FROM ${tableName} WHERE ${idName} = ?`;
        const selectPs = context.db.prepare(selectQuery).bind(args.id);
        const currentRow = await selectPs.all();

        const ps = context.db
          .prepare(`DELETE from ${tableName} WHERE ${idName} = ?`)
          .bind(args.id);
        const data = await ps.run();

        if (!data.success) {
          throw new Error(`Failed to delete ${singularName}`);
        }

        return {
          ...args.input,
          [camelCase(idName)]: args.id,
        };
      },*/
  };

  // Merge all resolvers
  const resolvers: {
    [key: string]: { [key: string]: ResolverFunction };
  } = merge(
    {
      Query: queryObject,
      Mutation: mutationObject,
    },
    otherResolvers,
  );

  return resolvers;
};
