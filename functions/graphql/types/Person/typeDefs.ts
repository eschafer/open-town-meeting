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

  type PeopleWithPagination {
    items: [Person!]!
    pageInfo: PageInfo
  }

  input PersonCreateInput {
    personId: ID
    firstName: String!
    middleName: String
    lastName: String!
    nameSuffix: String
    address: String
    email: String
    phone: String
  }

  input PersonUpdateInput {
    firstName: String
    middleName: String
    lastName: String
    nameSuffix: String
    address: String
    email: String
    phone: String
  }

  input PersonFilter {
    personId: IdFilter
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
    allPeople(
      filter: PersonFilter
      sort: [SortInput]
      limit: Int
      offset: Int
    ): PeopleWithPagination!
    personById(id: ID!): Person
  }

  extend type Mutation {
    createPerson(input: PersonCreateInput!): Person
    updatePerson(id: ID!, input: PersonUpdateInput!): Person
    deletePerson(id: ID!): Person
  }
`;

export default typeDefs;
