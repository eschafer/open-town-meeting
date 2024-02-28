import { createResolvers } from '../../../utils';

const resolvers = createResolvers({
  singularName: 'person',
  pluralName: 'people',
  tableName: 'people',
  idName: 'person_id',
  nestedGroup: [
    {
      singularName: 'committeeMember',
      pluralName: 'committeeMembers',
      tableName: 'committee_members',
      idName: 'committee_member_id',
    },
    {
      singularName: 'candidate',
      pluralName: 'candidates',
      tableName: 'candidates',
      idName: 'candidate_id',
    },
    {
      singularName: 'term',
      pluralName: 'terms',
      tableName: 'terms',
      idName: 'term_id',
    },
    {
      singularName: 'petitioner',
      pluralName: 'petitioners',
      tableName: 'petitioners',
      idName: 'petitioner_id',
    },
    {
      singularName: 'townMeetingVote',
      pluralName: 'townMeetingVotes',
      tableName: 'town_meeting_votes',
      idName: 'town_meeting_vote_id',
    },
  ],
});

export default resolvers;
