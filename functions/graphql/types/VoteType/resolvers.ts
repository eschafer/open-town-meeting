import { createResolvers } from '../../utils/createResolvers';

const resolvers = createResolvers({
  singularName: 'voteType',
  pluralName: 'voteTypes',
  tableName: 'vote_types',
  idName: 'vote_type_id',
  nestedGroup: [
    {
      singularName: 'townMeetingVote',
      pluralName: 'townMeetingVotes',
      tableName: 'town_meeting_votes',
      idName: 'town_meeting_vote_id',
    },
  ],
});

export default resolvers;
