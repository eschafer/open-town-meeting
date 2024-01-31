const typeDefs = `
type Committee {
  committeeId: ID!
  committeeName: String!
  committeeDescription: String
  committeeUrl: String
  createdAt: Int!
  updatedAt: Int!
}

input CommitteeInput {
  committeeId: ID
  committeeName: String
  committeeDescription: String
  committeeUrl: String
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allCommittees(filter: CommitteeInput): [Committee!]!
  committeeById(id: ID!): Committee
}
`;

export default typeDefs;
