import { createResolvers } from '../../../utils';

const resolvers = createResolvers({
  singularName: 'townMeetingVote',
  pluralName: 'townMeetingVotes',
  tableName: 'town_meeting_votes',
  idName: 'town_meeting_vote_id',
  nested: [
    {
      singularName: 'person',
      pluralName: 'people',
      tableName: 'people',
      idName: 'person_id',
    },
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
