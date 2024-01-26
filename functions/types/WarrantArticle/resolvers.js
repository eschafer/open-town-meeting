import { createResolvers } from '../../src/utils';

const resolvers = createResolvers({
  singularName: 'warrantArticle',
  pluralName: 'warrantArticles',
  tableName: 'warrant_articles',
  idName: 'article_id',
  nested: [
    {
      singularName: 'townMeetingSession',
      pluralName: 'townMeetingSessions',
      tableName: 'town_meeting_session',
      idName: 'session_id',
    },
  ],
});

export default resolvers;
