import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'petitioner',
  pluralName: 'petitioners',
  tableName: 'petitioners',
  idName: 'petitioner_id',
  nested: [
    {
      singularName: 'motion',
      pluralName: 'motions',
      tableName: 'motions',
      idName: 'motion_id',
    },
    {
      singularName: 'person',
      pluralName: 'people',
      tableName: 'people',
      idName: 'person_id',
    },
    {
      singularName: 'department',
      pluralName: 'departments',
      tableName: 'departments',
      idName: 'department_id',
    },
    {
      singularName: 'committee',
      pluralName: 'committees',
      tableName: 'committees',
      idName: 'committee_id',
    },
  ],
});

export default resolvers;
