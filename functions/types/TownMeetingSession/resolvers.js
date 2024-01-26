import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'townMeetingSession',
  pluralName: 'townMeetingSessions',
  tableName: 'town_meeting_sessions',
  idName: 'session_id',
});

export default resolvers;
