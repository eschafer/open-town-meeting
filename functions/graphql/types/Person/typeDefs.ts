const typeDefs = /* GraphQL */ `
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
    personId: StringFilter
    firstName: StringFilter
    middleName: StringFilterNullable
    lastName: StringFilter
    nameSuffix: StringFilterNullable
    address: StringFilterNullable
    email: StringFilterNullable
    phone: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
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
