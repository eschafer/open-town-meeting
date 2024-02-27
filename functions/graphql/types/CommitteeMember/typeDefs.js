const typeDefs = /* GraphQL */ `
  type CommitteeMember {
    committeeMemberId: ID!
    committee: Committee
    person: Person
    startDate: String
    endDate: String
    position: String
    appointingAuthority: String
    createdAt: Int!
    updatedAt: Int!
  }

  input CommitteeMemberInput {
    committeeMemberId: ID
    committeeId: ID
    personId: ID
    startDate: String
    endDate: String
    position: String
    appointingAuthority: String
    createdAt: Int
    updatedAt: Int
  }

  extend type Query {
    allCommitteeMembers(filter: CommitteeMemberInput): [CommitteeMember!]!
    committeeMemberById(id: ID!): CommitteeMember
  }

  extend type Mutation {
    createCommitteeMember(input: CommitteeMemberInput!): CommitteeMember
    updateCommitteeMember(
      id: ID!
      input: CommitteeMemberInput!
    ): CommitteeMember
    deleteCommitteeMember(id: ID!): CommitteeMember
  }
`;

export default typeDefs;
