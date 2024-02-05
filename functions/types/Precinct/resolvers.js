import { createResolvers } from '../../../utils';

const resolvers = createResolvers({
  singularName: 'precinct',
  pluralName: 'precincts',
  tableName: 'precincts',
  idName: 'precinct_id',
});

export default resolvers;
