import { createResolvers } from '../../../utils';

const resolvers = createResolvers({
  singularName: 'office',
  pluralName: 'offices',
  tableName: 'offices',
  idName: 'office_id',
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
