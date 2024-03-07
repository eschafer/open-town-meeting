const typeDefs = /* GraphQL */ `
  type CommitteeMember {
    committeeMemberId: ID!
    committee: Committee!
    person: Person!
    startDate: String
    endDate: String
    position: String
    appointingAuthority: String
    createdAt: Int!
    updatedAt: Int!
  }

  input CommitteeMemberCreateInput {
    committeeMemberId: ID
    committeeId: ID!
    personId: ID!
    startDate: String
    endDate: String
    position: String
    appointingAuthority: String
  }

  input CommitteeMemberUpdateInput {
    committeeId: ID
    personId: ID
    startDate: String
    endDate: String
    position: String
    appointingAuthority: String
  }

  input CommitteeMemberFilter {
    committeeMemberId: IdFilter
    committeeId: IdFilter
    personId: IdFilter
    startDate: DateFilterNullable
    endDate: DateFilterNullable
    position: StringFilterNullable
    appointingAuthority: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allCommitteeMembers(filter: CommitteeMemberFilter): [CommitteeMember!]!
    committeeMemberById(id: ID!): CommitteeMember
  }

  extend type Mutation {
    createCommitteeMember(input: CommitteeMemberCreateInput!): CommitteeMember
    updateCommitteeMember(
      id: ID!
      input: CommitteeMemberUpdateInput!
    ): CommitteeMember
    deleteCommitteeMember(id: ID!): CommitteeMember
  }
`;

export default typeDefs;
