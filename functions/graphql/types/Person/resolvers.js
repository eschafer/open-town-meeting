import { createResolvers } from '../../../utils';

const resolvers = createResolvers({
  singularName: 'person',
  pluralName: 'people',
  tableName: 'people',
  idName: 'person_id',
});

export default resolvers;
