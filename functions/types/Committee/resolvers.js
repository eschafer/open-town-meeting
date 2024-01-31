import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'committee',
  pluralName: 'committees',
  tableName: 'committees',
  idName: 'committee_id',
});

export default resolvers;
