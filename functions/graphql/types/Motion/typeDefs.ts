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

  input MotionInput {
    motionId: StringFilter
    warrantArticleId: StringFilter
    motionTitle: StringFilter
    motionDescription: StringFilterNullable
    motionType: StringFilterNullable
    threshold: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allMotions(filter: MotionInput): [Motion!]!
    motionById(id: ID!): Motion
  }

  extend type Mutation {
    createMotion(input: MotionInput!): Motion
    updateMotion(id: ID!, input: MotionInput!): Motion
    deleteMotion(id: ID!): Motion
  }
`;

export default typeDefs;
