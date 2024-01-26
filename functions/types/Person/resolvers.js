import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'person',
  pluralName: 'people',
  tableName: 'people',
  idName: 'person_id',
  nested: [
    {
      singularName: 'precinct',
      pluralName: 'precincts',
      tableName: 'precincts',
      idName: 'precinct_id',
    },
  ],
});

export default resolvers;

/*
  Query: {
    async allPeople(root, { firstName, lastName }, { db }) {
      console.log('all people', firstName, lastName);

      let query = 'SELECT * FROM people';
      let params = [];
      if (firstName || lastName) {
        query += ' WHERE';
        if (firstName) {
          query += ' first_name = ?';
          params.push(firstName);
        }
        if (lastName) {
          if (firstName) query += ' AND';
          query += ' last_name = ?';
          params.push(lastName);
        }
      }

      const ps = db
        .prepare(
          //'SELECT * from people WHERE (? IS NULL OR first_name = ?) AND (? IS NULL OR last_name = ?)',
          query,
        )
        .bind(...params);
      console.log(ps);
      const data = await ps.all();
      return data.results;
    },

  }
*/
