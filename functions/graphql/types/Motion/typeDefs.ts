const typeDefs = /* GraphQL */ `
  type Motion {
    motionId: ID!
    warrantArticle: WarrantArticle!
    motionTitle: String!
    motionDescription: String
    motionType: String
    threshold: String

    petitioners: [Petitioner]
    townMeetingVotes: [TownMeetingVote]
    townMeetingVoteTallies: [TownMeetingVoteTally]
    townMeetingVoteResults: [TownMeetingVoteResult]

    createdAt: Int!
    updatedAt: Int!
  }

  input MotionCreateInput {
    motion_id: ID
    warrantArticleId: ID!
    motionTitle: String!
    motionDescription: String
    motionType: String
    threshold: String
  }

  input MotionUpdateInput {
    warrantArticleId: ID
    motionTitle: String
    motionDescription: String
    motionType: String
    threshold: String
  }

  input MotionFilter {
    motionId: IdFilter
    warrantArticleId: IdFilter
    motionTitle: StringFilter
    motionDescription: StringFilterNullable
    motionType: StringFilterNullable
    threshold: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allMotions(filter: MotionFilter): [Motion!]!
    motionById(id: ID!): Motion
  }

  extend type Mutation {
    createMotion(input: MotionCreateInput!): Motion
    updateMotion(id: ID!, input: MotionUpdateInput!): Motion
    deleteMotion(id: ID!): Motion
  }
`;

export default typeDefs;
