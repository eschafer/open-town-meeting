import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'electionResult',
  pluralName: 'electionResults',
  tableName: 'election_results',
  idName: 'election_result_id',
  nested: [
    {
      singularName: 'candidate',
      pluralName: 'candidates',
      tableName: 'candidates',
      idName: 'candidate_id',
    },
  ],
});

export default resolvers;
