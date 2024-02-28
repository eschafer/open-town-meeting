const typeDefs = `
type Person {
  personId: ID!
  firstName: String!
  middleName: String
  lastName: String!
  nameSuffix: String
  address: String
  email: String
  phone: String

  committeeMembers: [CommitteeMember]
  candidates: [Candidate]
  terms: [Term]
  petitioners: [Petitioner]
  townMeetingVotes: [TownMeetingVote]

  createdAt: Int!
  updatedAt: Int!
}

input PersonInput {
  personId: ID
  firstName: String
  middleName: String
  lastName: String
  nameSuffix: String
  address: String
  email: String
  phone: String
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allPeople(filter: PersonInput): [Person!]!
  personById(id: ID!): Person
}

extend type Mutation {
  createPerson(input: PersonInput!): Person
  updatePerson(id: ID!, input: PersonInput!): Person
  deletePerson(id: ID!): Person
}
`;

export default typeDefs;
