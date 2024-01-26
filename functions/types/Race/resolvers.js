import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'race',
  pluralName: 'races',
  tableName: 'races',
  idName: 'race_id',
  nested: [
    {
      singularName: 'office',
      pluralName: 'offices',
      tableName: 'offices',
      idName: 'office_id',
    },
    {
      singularName: 'election',
      pluralName: 'elections',
      tableName: 'elections',
      idName: 'election_id',
    },
  ],
});

export default resolvers;
