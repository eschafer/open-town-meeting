const typeDefs = `
type WarrantArticle {
  article_id: ID!
  townMeetingSession: TownMeetingSession!
  article_number: Int!
  article_title: String!
  article_description: String
  created_at: Int!
  updated_at: Int!
}

extend type Query {
  allWarrantArticles: [WarrantArticle!]!
  warrantArticleById(id: ID!): WarrantArticle
}
`;

export default typeDefs;
