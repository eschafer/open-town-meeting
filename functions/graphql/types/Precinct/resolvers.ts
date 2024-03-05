import { createResolvers } from '../../utils/createResolvers';

const resolvers = createResolvers({
  singularName: 'precinct',
  pluralName: 'precincts',
  tableName: 'precincts',
  idName: 'precinct_id',
  nestedGroup: [
    {
      singularName: 'office',
      pluralName: 'offices',
      tableName: 'offices',
      idName: 'office_id',
    },
  ],
});

export default resolvers;
