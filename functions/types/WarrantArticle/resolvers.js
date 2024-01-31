import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'warrantArticle',
  pluralName: 'warrantArticles',
  tableName: 'warrant_articles',
  idName: 'warrant_article_id',
  nested: [
    {
      singularName: 'townMeetingSession',
      pluralName: 'townMeetingSessions',
      tableName: 'town_meeting_sessions',
      idName: 'town_meeting_session_id',
    },
  ],
});

export default resolvers;
