import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'department',
  pluralName: 'departments',
  tableName: 'departments',
  idName: 'department_id',
});

export default resolvers;
