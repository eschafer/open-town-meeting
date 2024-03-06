const typeDefs = /* GraphQL */ `
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

  input WarrantArticleCreateInput {
    warrantArticleId: ID
    townMeetingSessionId: ID!
    articleNumber: Int!
    articleTitle: String!
    articleDescription: String
  }

  input WarrantArticleUpdateInput {
    townMeetingSessionId: ID
    articleNumber: Int
    articleTitle: String
    articleDescription: String
  }

  input WarrantArticleFilter {
    warrantArticleId: IdFilter
    townMeetingSessionId: IdFilter
    articleNumber: NumberFilter
    articleTitle: StringFilter
    articleDescription: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allWarrantArticles(filter: WarrantArticleFilter): [WarrantArticle!]!
    warrantArticleById(id: ID!): WarrantArticle
  }

  extend type Mutation {
    createWarrantArticle(input: WarrantArticleCreateInput!): WarrantArticle
    updateWarrantArticle(
      id: ID!
      input: WarrantArticleUpdateInput!
    ): WarrantArticle
    deleteWarrantArticle(id: ID!): WarrantArticle
  }
`;

export default typeDefs;
