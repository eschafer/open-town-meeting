import { createResolvers } from '../../../utils';

const resolvers = createResolvers({
  singularName: 'office',
  pluralName: 'offices',
  tableName: 'offices',
  idName: 'office_id',
  nested: [
    {
      singularName: 'precinct',
      pluralName: 'precincts',
      tableName: 'precincts',
      idName: 'precinct_id',
    },
  ],
  nestedGroup: [
    {
      singularName: 'race',
      pluralName: 'races',
      tableName: 'races',
      idName: 'race_id',
    },
    {
      singularName: 'term',
      pluralName: 'terms',
      tableName: 'terms',
      idName: 'term_id',
    },
  ],
});

export default resolvers;
