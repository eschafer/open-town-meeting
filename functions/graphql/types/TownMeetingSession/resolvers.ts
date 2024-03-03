import { createResolvers } from '../../../utils';

const resolvers = createResolvers({
  singularName: 'townMeetingSession',
  pluralName: 'townMeetingSessions',
  tableName: 'town_meeting_sessions',
  idName: 'town_meeting_session_id',
  nestedGroup: [
    {
      singularName: 'warrantArticle',
      pluralName: 'warrantArticles',
      tableName: 'warrant_articles',
      idName: 'warrant_article_id',
    },
  ],
});

export default resolvers;
