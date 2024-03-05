import { createResolvers } from '../../utils/createResolvers';

const resolvers = createResolvers({
  singularName: 'department',
  pluralName: 'departments',
  tableName: 'departments',
  idName: 'department_id',
});

export default resolvers;
