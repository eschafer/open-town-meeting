const typeDefs = /* GraphQL */ `
  type Committee {
    committeeId: ID!
    committeeName: String!
    committeeDescription: String
    committeeUrl: String

    committeeMembers: [CommitteeMember]

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

  extend type Mutation {
    createCommittee(input: CommitteeInput!): Committee
    updateCommittee(id: ID!, input: CommitteeInput!): Committee
    deleteCommittee(id: ID!): Committee
  }
`;

export default typeDefs;
