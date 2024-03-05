import { createResolvers } from '../../utils/createResolvers';

const resolvers = createResolvers({
  singularName: 'committeeMember',
  pluralName: 'committeeMembers',
  tableName: 'committee_members',
  idName: 'committee_member_id',
  nested: [
    {
      singularName: 'committee',
      pluralName: 'committees',
      tableName: 'committees',
      idName: 'committee_id',
    },
    {
      singularName: 'person',
      pluralName: 'people',
      tableName: 'people',
      idName: 'person_id',
    },
  ],
});

export default resolvers;
