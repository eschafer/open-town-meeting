import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'term',
  pluralName: 'terms',
  tableName: 'terms',
  idName: 'term_id',
  nested: [
    {
      singularName: 'person',
      pluralName: 'people',
      tableName: 'people',
      idName: 'person_id',
    },
    {
      singularName: 'office',
      pluralName: 'offices',
      tableName: 'offices',
      idName: 'office_id',
    },
  ],
});

export default resolvers;
