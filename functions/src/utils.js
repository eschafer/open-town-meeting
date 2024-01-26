import { merge } from 'lodash';

function createNestedResolver(
  { singularName, pluralName, tableName, idName },
  parentSingularName,
) {
  return {
    [parentSingularName.charAt(0).toUpperCase() + parentSingularName.slice(1)]:
      {
        [singularName]: async (root, args, context) => {
          console.log(
            `SELECT * from ${tableName} WHERE ${idName} = ?`,
            root[idName],
            root,
            idName,
          );
          const ps = context.db
            .prepare(`SELECT * from ${tableName} WHERE ${idName} = ?`)
            .bind(root[idName]);
          const data = await ps.run();

          if (!data.success) {
            throw new Error(`No ${tableName} found with id ${idName}`);
          }
          console.log(
            `${parentSingularName.charAt(0).toUpperCase() + parentSingularName.slice(1)}.${singularName}`,
            data.results[0],
          );
          return data.results[0];
        },
      },
  };
}

export function createResolvers({
  singularName,
  pluralName,
  tableName,
  idName,
  nested,
}) {
  const nestedResolvers =
    nested?.length > 0
      ? nested.map((type) => {
          return createNestedResolver(type, singularName);
        })
      : [];

  let otherResolvers = {};
  if (nestedResolvers.length > 0) {
    otherResolvers = merge(...nestedResolvers);
  }

  return merge(
    {
      Query: {
        [`all${pluralName.charAt(0).toUpperCase() + pluralName.slice(1)}`]:
          async (root, args, context) => {
            let query = `SELECT * from ${tableName}`;
            let values = [];

            if (args.filter) {
              const filters = Object.entries(args.filter);
              const conditions = filters.map(([key, value], index) => {
                values.push(value);
                return `${key} = ?`;
              });

              query += ` WHERE ${conditions.join(' AND ')}`;
            }

            console.log('query', query);
            console.log('values', values);

            const ps = context.db.prepare(query).bind(...values);
            const data = await ps.all();

            console.log(
              `Query.all${pluralName.charAt(0).toUpperCase() + pluralName.slice(1)}`,
              data.results,
            );
            return data.results;
          },
        [`${singularName}ById`]: async (root, args, context) => {
          const ps = context.db
            .prepare(`SELECT * from ${tableName} WHERE ${idName} = ?`)
            .bind(args.id);
          const data = await ps.run();

          if (!data.success) {
            throw new Error(`No ${tableName} found with id ${args.id}`);
          }
          console.log(`Query.${singularName}ById`, data.results[0]);
          return data.results[0];
        },
      },
    },
    otherResolvers,
  );
}
