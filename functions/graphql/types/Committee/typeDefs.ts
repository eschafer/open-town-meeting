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

  input CommitteeCreateInput {
    committeeId: ID
    committeeName: String!
    committeeDescription: String
    committeeUrl: String
  }

  input CommitteeUpdateInput {
    committeeName: String
    committeeDescription: String
    committeeUrl: String
  }

  input CommitteeFilter {
    committeeId: IdFilter
    committeeName: StringFilter
    committeeDescription: StringFilterNullable
    committeeUrl: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allCommittees(filter: CommitteeFilter): [Committee!]!
    committeeById(id: ID!): Committee
  }

  extend type Mutation {
    createCommittee(input: CommitteeCreateInput!): Committee
    updateCommittee(id: ID!, input: CommitteeUpdateInput!): Committee
    deleteCommittee(id: ID!): Committee
  }
`;

export default typeDefs;
