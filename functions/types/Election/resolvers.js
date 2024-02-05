import { createResolvers } from '../../../utils';

const resolvers = createResolvers({
  singularName: 'election',
  pluralName: 'elections',
  tableName: 'elections',
  idName: 'election_id',
});

export default resolvers;
