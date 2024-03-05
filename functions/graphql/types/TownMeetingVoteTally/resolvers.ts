import { createResolvers } from '../../utils/createResolvers';

const resolvers = createResolvers({
  singularName: 'townMeetingVoteTally',
  pluralName: 'townMeetingVoteTallies',
  tableName: 'town_meeting_vote_tallies',
  idName: 'town_meeting_vote_tally_id',
  nested: [
    {
      singularName: 'motion',
      pluralName: 'motions',
      tableName: 'motions',
      idName: 'motion_id',
    },
    {
      singularName: 'voteType',
      pluralName: 'voteTypes',
      tableName: 'vote_types',
      idName: 'vote_type_id',
    },
  ],
});

export default resolvers;
