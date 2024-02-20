const typeDefs = `
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
`;

export default typeDefs;
