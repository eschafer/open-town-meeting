import { createResolvers } from '../../../utils';

const resolvers = createResolvers({
  singularName: 'motion',
  pluralName: 'motions',
  tableName: 'motions',
  idName: 'motion_id',
  nested: [
    {
      singularName: 'warrantArticle',
      pluralName: 'warrantArticles',
      tableName: 'warrant_articles',
      idName: 'warrant_article_id',
    },
  ],
  nestedGroup: [
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
