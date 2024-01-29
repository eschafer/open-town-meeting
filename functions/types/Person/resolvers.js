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
