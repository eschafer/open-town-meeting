import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'committeeMember',
  pluralName: 'committeeMembers',
  tableName: 'committee_members',
  idName: 'committee_member_id',
});

export default resolvers;
