import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'voteType',
  pluralName: 'voteTypes',
  tableName: 'vote_types',
  idName: 'vote_type_id',
});

export default resolvers;
