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
    committeeMemberId: StringFilter
    committeeId: StringFilterNullable
    personId: StringFilterNullable
    startDate: DateFilterNullable
    endDate: DateFilterNullable
    position: StringFilterNullable
    appointingAuthority: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
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
