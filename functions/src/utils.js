import { merge } from 'lodash';

export function createResolvers({
  singularName,
  pluralName,
  tableName,
  idName,
  nested,
}) {
  let nestedResolvers = [];
  if (nested?.length > 0) {
    for (var i = 0; i < nested.length; i++) {
      let type = nested[i];
      nestedResolvers.push({
        [singularName.charAt(0).toUpperCase() + singularName.slice(1)]: {
          [type.singularName]: async (root, args, context) => {
            const ps = context.db
              .prepare(
                `SELECT * from ${type.tableName} WHERE ${type.idName} = ?`,
              )
              .bind(root[type.idName]);
            const data = await ps.run();

            if (!data.success) {
              throw new Error(
                `No ${type.tableName} found with id ` + type.idName,
              );
            }
            return data.results[0];
          },
        },
      });
    }
  }

  let otherResolvers = {};
  if (nestedResolvers.length > 0) {
    otherResolvers = merge({ Person: {} }, ...nestedResolvers);
  }

  return merge(
    {
      Query: {
        [`all${pluralName.charAt(0).toUpperCase() + pluralName.slice(1)}`]:
          async (root, args, context) => {
            const ps = context.db.prepare(`SELECT * from ${tableName}`);
            const data = await ps.all();
            return data.results;
          },
        [`${singularName}ById`]: async (root, args, context) => {
          const ps = context.db
            .prepare(`SELECT * from ${tableName} WHERE ${idName} = ?`)
            .bind(args.id);
          const data = await ps.run();

          if (!data.success) {
            throw new Error(`No ${tableName} found with id ` + args.id);
          }
          return data.results[0];
        },
      },
    },
    otherResolvers,
  );
}
