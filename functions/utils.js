import { merge } from 'lodash';

function toCamelCase(str) {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', ''),
  );
}

function convertKeysToCamelCase(obj) {
  const newObj = {};
  for (let key in obj) {
    newObj[toCamelCase(key)] = obj[key];
  }
  return newObj;
}

export function toSnakeCase(str) {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

export function convertKeysToSnakeCase(obj) {
  const newObj = {};
  for (let key in obj) {
    newObj[toSnakeCase(key)] = obj[key];
  }
  return newObj;
}

function getUnixTimestamp() {
  return Math.floor(Date.now() / 1000);
}

const tables = {
  precincts: 'precinct_id',
  elections: 'election_id',
  town_meeting_sessions: 'town_meeting_session_id',
  vote_types: 'vote_type_id',
  people: 'person_id',
  committees: 'committee_id',
  departments: 'department_id',
  committee_members: 'committee_member_id',
  offices: 'office_id',
  races: 'race_id',
  candidates: 'candidate_id',
  election_results: 'election_result_id',
  terms: 'term_id',
  warrant_articles: 'warrant_article_id',
  motions: 'motion_id',
  petitioners: 'petitioner_id',
  town_meeting_votes: 'town_meeting_vote_id',
  town_meeting_vote_tallies: 'town_meeting_vote_tally_id',
  town_meeting_vote_results: 'town_meeting_vote_result_id',
};

function createNestedResolver(
  { singularName, pluralName, tableName, idName },
  parentSingularName,
) {
  const nestedResolver = {
    [parentSingularName.charAt(0).toUpperCase() + parentSingularName.slice(1)]:
      {
        [singularName]: async (root, args, context, info) => {
          // If the type of the nested group is the same as an ancestor type,
          // return null to prevent circular queries.
          let currentPath = info.path;
          while (currentPath) {
            if (
              currentPath.typename ===
              singularName.charAt(0).toUpperCase() + singularName.slice(1)
            ) {
              // throw new Error('Circular query detected.');
            }
            currentPath = currentPath.prev;
          }

          if (!root[toCamelCase(idName)]) {
            return null;
          }

          if (!Object.keys(tables).includes(tableName)) {
            throw new Error(`Invalid table name: ${tableName}`);
          }

          if (tables[tableName] !== idName) {
            throw new Error(
              `Invalid id name for table ${tableName}: ${idName}`,
            );
          }

          const ps = context.db
            .prepare(`SELECT * from ${tableName} WHERE ${idName} = ?`)
            .bind(root[toCamelCase(idName)]);
          const data = await ps.all();

          if (data.results.length === 0) {
            return null;
          }

          const result = convertKeysToCamelCase(data.results[0]);

          if (!data.success) {
            throw new Error(
              `No ${tableName} found with id ${root[toCamelCase(idName)]}`,
            );
          }
          return result;
        },
      },
  };

  return nestedResolver;
}

function createNestedGroupResolver(
  { singularName, pluralName, tableName, idName },
  parentSingularName,
  parentIdName,
) {
  const nestedGroupResolver = {
    [parentSingularName.charAt(0).toUpperCase() + parentSingularName.slice(1)]:
      {
        [pluralName]: async (root, args, context, info) => {
          // If the type of the nested group is the same as an ancestor type,
          // return null to prevent circular queries.
          let currentPath = info.path;
          while (currentPath) {
            if (
              currentPath.typename ===
              singularName.charAt(0).toUpperCase() + singularName.slice(1)
            ) {
              // throw new Error('Circular query detected.');
            }
            currentPath = currentPath.prev;
          }

          if (!root[toCamelCase(parentIdName)]) {
            return null;
          }
          const ps = context.db
            .prepare(`SELECT * from ${tableName} WHERE ${parentIdName} = ?`)
            .bind(root[toCamelCase(parentIdName)]);
          const data = await ps.all();

          if (data.results.length === 0) {
            return null;
          }

          // const result = convertKeysToCamelCase(data.results[0]);
          const result = data.results.map(convertKeysToCamelCase);

          if (!data.success) {
            throw new Error(
              `No ${tableName} found with id ${root[toCamelCase(idName)]}`,
            );
          }
          return result;
        },
      },
  };

  return nestedGroupResolver;
}

export function createResolvers({
  singularName,
  pluralName,
  tableName,
  idName,
  nested,
  nestedGroup,
}) {
  const nestedResolvers =
    nested?.length > 0
      ? nested.map((type) => {
          return createNestedResolver(type, singularName);
        })
      : [];

  const nestedGroupResolvers =
    nestedGroup?.length > 0
      ? nestedGroup.map((type) => {
          return createNestedGroupResolver(type, singularName, idName);
        })
      : [];

  let otherResolvers = {};
  if (nestedResolvers.length > 0) {
    otherResolvers = merge(...nestedResolvers);
  }
  if (nestedGroupResolvers.length > 0) {
    otherResolvers = merge(otherResolvers, ...nestedGroupResolvers);
  }

  const resolvers = merge(
    {
      Query: {
        [`all${pluralName.charAt(0).toUpperCase() + pluralName.slice(1)}`]:
          async (root, args, context) => {
            let query = `SELECT * from ${tableName}`;
            let values = [];

            if (args.filter) {
              const filter = convertKeysToSnakeCase(args.filter);
              const filters = Object.entries(filter);
              const conditions = filters.map(([key, value], index) => {
                values.push(value);
                return `${key} = ?`;
              });

              query += ` WHERE ${conditions.join(' AND ')}`;
            }

            const ps = context.db.prepare(query).bind(...values);
            const data = await ps.all();

            const results = data.results.map(convertKeysToCamelCase);

            return results;
          },
        [`${singularName}ById`]: async (root, args, context) => {
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

          const result = convertKeysToCamelCase(data.results[0]);

          if (!data.success) {
            throw new Error(`No ${tableName} found with id ${args.id}`);
          }

          return result;
        },
      },
      Mutation: {
        [`create${singularName.charAt(0).toUpperCase() + singularName.slice(1)}`]:
          async (root, args, context) => {
            const timestamp = getUnixTimestamp();

            const input = Object.assign(
              {},
              convertKeysToSnakeCase(args.input),
              { created_at: timestamp, updated_at: timestamp },
            );

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
              [toCamelCase(idName)]: data.meta.last_row_id,
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

            const input = Object.assign(
              {},
              convertKeysToSnakeCase(args.input),
              { updated_at: timestamp },
            );

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
            return convertKeysToCamelCase(updatedData.results[0]);
          },
        [`delete${singularName.charAt(0).toUpperCase() + singularName.slice(1)}`]:
          async (root, args, context) => {
            if (!args.id) {
              throw new Error(`No ${tableName} found with id ${args.id}`);
            }

            // First, select the current row
            const selectQuery = `SELECT * FROM ${tableName} WHERE ${idName} = ?`;
            const selectPs = context.db.prepare(selectQuery).bind(args.id);
            const currentRow = await selectPs.all();

            /*const ps = context.db
              .prepare(`DELETE from ${tableName} WHERE ${idName} = ?`)
              .bind(args.id);
            const data = await ps.run();

            if (!data.success) {
              throw new Error(`Failed to delete ${singularName}`);
            }

            return {
              ...args.input,
              [toCamelCase(idName)]: args.id,
            };*/
          },
      },
    },
    otherResolvers,
  );

  return resolvers;
}
