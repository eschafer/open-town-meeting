import { createResolvers } from '../../../utils';

const resolvers = createResolvers({
  singularName: 'committee',
  pluralName: 'committees',
  tableName: 'committees',
  idName: 'committee_id',
  nestedGroup: [
    {
      singularName: 'committeeMember',
      pluralName: 'committeeMembers',
      tableName: 'committee_members',
      idName: 'committee_member_id',
    },
  ],
});

export default resolvers;
