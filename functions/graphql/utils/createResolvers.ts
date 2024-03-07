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

// prettier-ignore
const operators = {
  isNull: (key: string, value: boolean) => ({ condition: `${key} IS ${value ? 'NULL' : 'NOT NULL'}` }),
  eq: (key: string, value: number | string) => ({ condition: `${key} = ?`, value }),
  ne: (key: string, value: number | string) => ({ condition: `${key} != ?`, value }),
  gt: (key: string, value: number | string) => ({ condition: `${key} > ?`, value }),
  gte: (key: string, value: number | string) => ({ condition: `${key} >= ?`, value }),
  lt: (key: string, value: number | string) => ({ condition: `${key} < ?`, value }),
  lte: (key: string, value: number | string) => ({ condition: `${key} <= ?`, value }),
  exact: (key: string, value: string) => ({ condition: `${key} = ?`, value }),
  contains: (key: string, value: string) => ({ condition: `${key} LIKE ?`, value: `%${value}%` }),
  startsWith: (key: string, value: string) => ({ condition: `${key} LIKE ?`, value: `${value}%` }),
  endsWith: (key: string, value: string) => ({ condition: `${key} LIKE ?`, value: `%${value}` }),
};

const processFilter = (
  filterKeyCamelCase: string,
  filterValue: number | string,
) => {
  const filterKey = snakeCase(filterKeyCamelCase);
  const conditions = [];
  if (filterValue && typeof filterValue === 'object') {
    const innerFilters = Object.entries(filterValue);
    innerFilters.forEach(([operatorKey, operatorValue]) => {
      if (operators[operatorKey]) {
        conditions.push(operators[operatorKey](filterKey, operatorValue));
      }
    });
  } else {
    conditions.push({
      condition: `${filterKey} = ?`,
      value: filterValue,
    });
  }
  return conditions;
};

const buildQuery = (tableName: string, filter?: Record<string, unknown>) => {
  let query = `SELECT * from ${tableName}`;
  let values: Array<unknown> = [];

  if (filter) {
    const conditions = Object.entries(mapKeysToSnakeCase(filter)).flatMap(
      ([filterKeyCamelCase, filterValue]) =>
        processFilter(filterKeyCamelCase, filterValue),
    );

    const conditionStrings = conditions
      .map(({ condition }) => condition)
      .join(' AND ');

    values = conditions.flatMap(({ value }) => value);

    query += ` WHERE ${conditionStrings}`;
  }

  return { query, values };
};

const executeQuery = async (query: string, values: Array<unknown>, context) => {
  const ps = context.db.prepare(query).bind(...values);
  const data = await ps.all();

  if (!data.success) {
    throw new Error(`Failed to execute query: ${query}`);
  }

  return data.results.map(mapKeysToCamelCase);
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
    // allPrecincts, allMotions, etc.
    [listQueryName]: async (root, args, context) => {
      const { query, values } = buildQuery(tableName, args.filter);
      const results = await executeQuery(query, values, context);

      if (results.length === 0) {
        const filterString = JSON.stringify(args.filter).replace(/\"/g, "'");
        throw new Error(`No ${tableName} found with filter ${filterString}`);
      }

      return results;
    },
    // precinctById, motionById, etc.
    [itemQueryName]: async (
      root,
      args,
      context,
    ): Promise<Record<string, unknown> | null> => {
      const query = `SELECT * from ${tableName} WHERE ${idName} = ?`;
      const results = await executeQuery(query, [args.id], context);

      if (results.length === 0) {
        throw new Error(`No ${tableName} found with id ${args.id}`);
      }

      return results[0];
    },
  };

  const createItemName = `create${singularName.charAt(0).toUpperCase() + singularName.slice(1)}`;
  const updateItemName = `update${singularName.charAt(0).toUpperCase() + singularName.slice(1)}`;

  // Create resolvers for mutations
  const mutationObject: {
    [key: string]: ResolverFunction;
  } = {
    [createItemName]: async (root, args, context) => {
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
    [updateItemName]: async (root, args, context) => {
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
