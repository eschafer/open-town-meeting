const typeDefs = `
type WarrantArticle {
  warrantArticleId: ID!
  townMeetingSession: TownMeetingSession!
  articleNumber: Int!
  articleTitle: String!
  articleDescription: String
  createdAt: Int!
  updatedAt: Int!
}

input WarrantArticleInput {
  warrantArticleId: ID
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