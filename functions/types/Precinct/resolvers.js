const resolvers = {
  Query: {
    async allPrecincts(root, args, { db }) {
      const ps = db.prepare('SELECT * from precincts');
      const data = await ps.all();
      return data.results;
    },
    async precinctById(root, { id }, { db }) {
      const ps = db
        .prepare('SELECT * from precincts WHERE precinct_id = ?')
        .bind(id);
      const data = await ps.run();

      if (!data.success) {
        throw new Error('No precinct found with id ' + id);
      }
      return data.results[0];
    },
  },
};

export default resolvers;
