const typeDefs = `
type Motion {
  motionId: ID!
  warrantArticle: WarrantArticle!
  motionTitle: String!
  motionDescription: String
  threshold: String

  petitioners: [Petitioner]
  townMeetingVotes: [TownMeetingVote]

  createdAt: Int!
  updatedAt: Int!
}

input MotionInput {
  motionId: ID
  warrantArticleId: ID
  motionTitle: String
  motionDescription: String
  threshold: String
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allMotions(filter: MotionInput): [Motion!]!
  motionById(id: ID!): Motion
}
`;

export default typeDefs;
