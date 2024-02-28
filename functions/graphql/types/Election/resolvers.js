import { createResolvers } from '../../../utils';

const resolvers = createResolvers({
  singularName: 'election',
  pluralName: 'elections',
  tableName: 'elections',
  idName: 'election_id',
  nestedGroup: [
    {
      singularName: 'race',
      pluralName: 'races',
      tableName: 'races',
      idName: 'race_id',
    },
  ],
});

export default resolvers;
