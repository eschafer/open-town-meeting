import { createResolvers } from '../../utils/createResolvers';

const resolvers = createResolvers({
  singularName: 'townMeetingVoteResult',
  pluralName: 'townMeetingVoteResults',
  tableName: 'town_meeting_vote_results',
  idName: 'town_meeting_vote_result_id',
  nested: [
    {
      singularName: 'motion',
      pluralName: 'motions',
      tableName: 'motions',
      idName: 'motion_id',
    },
  ],
});

export default resolvers;
