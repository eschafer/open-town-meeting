const typeDefs = `
type WarrantArticle {
  articleId: ID!
  townMeetingSession: TownMeetingSession!
  articleNumber: Int!
  articleTitle: String!
  articleDescription: String
  createdAt: Int!
  updatedAt: Int!
}

input WarrantArticleInput {
  articleId: ID
  townMeetingSessionId: ID
  articleNumber: Int
  articleTitle: String
  articleDescription: String
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allWarrantArticles(filter: WarrantArticleInput): [WarrantArticle!]!
  warrantArticleById(id: ID!): WarrantArticle
}
`;

export default typeDefs;
