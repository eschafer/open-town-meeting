import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'candidate',
  pluralName: 'candidates',
  tableName: 'candidates',
  idName: 'candidate_id',
  nested: [
    {
      singularName: 'person',
      pluralName: 'people',
      tableName: 'people',
      idName: 'person_id',
      nested: [
        {
          singularName: 'precinct',
          pluralName: 'precincts',
          tableName: 'precincts',
          idName: 'precinct_id',
        },
      ],
    },
    {
      singularName: 'race',
      pluralName: 'races',
      tableName: 'races',
      idName: 'race_id',
      nested: [
        {
          singularName: 'office',
          pluralName: 'offices',
          tableName: 'offices',
          idName: 'office_id',
        },
        {
          singularName: 'election',
          pluralName: 'elections',
          tableName: 'elections',
          idName: 'election_id',
        },
      ],
    },
  ],
});

export default resolvers;
