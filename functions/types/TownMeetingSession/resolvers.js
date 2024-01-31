import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'townMeetingSession',
  pluralName: 'townMeetingSessions',
  tableName: 'town_meeting_sessions',
  idName: 'town_meeting_session_id',
});

export default resolvers;
