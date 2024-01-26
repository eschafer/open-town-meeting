import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'vote',
  pluralName: 'votes',
  tableName: 'votes',
  idName: 'vote_id', // this isn't right; it's actually multiple keys
  nested: [
    {
      singularName: 'person',
      pluralName: 'people',
      tableName: 'people',
      idName: 'person_id',
    },
    {
      singularName: 'motion',
      pluralName: 'motions',
      tableName: 'motions',
      idName: 'mostion_id',
    },
    {
      singularName: 'voteType',
      pluralName: 'voteTypes',
      tableName: 'vote_types',
      idName: 'vote_type_id',
    },
  ],
});

export default resolvers;
