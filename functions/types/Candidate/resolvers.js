import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'candidate',
  pluralName: 'candidates',
  tableName: 'candidates',
  idName: 'candidate_id',
  nested: [
    {
      singularName: 'person',
      pluralName: 'people',
      tableName: 'people',
      idName: 'person_id',
    },
    {
      singularName: 'race',
      pluralName: 'races',
      tableName: 'races',
      idName: 'race_id',
    },
  ],
});

export default resolvers;
