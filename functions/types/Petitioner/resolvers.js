import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'petitioner',
  pluralName: 'petitioners',
  tableName: 'petitioners',
  idName: 'petitioner_id', // this isn't right; it's actually multiple keys
  nested: [
    {
      singularName: 'person',
      pluralName: 'people',
      tableName: 'people',
      idName: 'person_id',
    },
    {
      singularName: 'motion',
      pluralName: 'motions',
      tableName: 'motions',
      idName: 'motion_id',
    },
  ],
});

export default resolvers;
