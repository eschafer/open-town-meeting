import { createResolvers } from '../../src/utils';

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
});

export default resolvers;
