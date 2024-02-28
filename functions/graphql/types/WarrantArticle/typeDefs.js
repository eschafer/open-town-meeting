const typeDefs = `
type WarrantArticle {
  warrantArticleId: ID!
  townMeetingSession: TownMeetingSession!
  articleNumber: Int!
  articleTitle: String!
  articleDescription: String

  motions: [Motion]

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

extend type Mutation {
  createWarrantArticle(input: WarrantArticleInput!): WarrantArticle
  updateWarrantArticle(id: ID!, input: WarrantArticleInput!): WarrantArticle
  deleteWarrantArticle(id: ID!): WarrantArticle
}
`;

export default typeDefs;
