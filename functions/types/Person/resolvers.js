const resolvers = {
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
    async personById(root, { id }, { db }) {
      const ps = db
        .prepare('SELECT * from people WHERE person_id = ?')
        .bind(id);
      const data = await ps.run();

      if (!data.success) {
        throw new Error('No person found with id ' + id);
      }
      return data.results[0];
    },
  },
  Person: {
    precinct: async (root, args, { db }) => {
      const ps = db
        .prepare('SELECT * from precincts WHERE precinct_id = ?')
        .bind(root.precinct_id);
      const data = await ps.run();
      return data.results[0];
    },
  },
};

export default resolvers;
