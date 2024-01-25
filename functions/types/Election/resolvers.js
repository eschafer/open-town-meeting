const resolvers = {
  Query: {
    async allElections(root, args, { db }) {
      const ps = db.prepare('SELECT * from elections');
      const data = await ps.all();
      return data.results;
    },
    async electionById(root, { id }, { db }) {
      const ps = db
        .prepare('SELECT * from elections WHERE election_id = ?')
        .bind(id);
      const data = await ps.run();

      if (!data.success) {
        throw new Error('No election found with id ' + id);
      }
      return data.results[0];
    },
  },
};

export default resolvers;
