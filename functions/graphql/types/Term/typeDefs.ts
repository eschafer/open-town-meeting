const typeDefs = /* GraphQL */ `
  type Term {
    termId: ID!
    person: Person!
    office: Office!
    startDate: String!
    endDate: String!
    createdAt: Int!
    updatedAt: Int!
  }

  input TermCreateInput {
    termId: ID
    personId: ID!
    officeId: ID!
    startDate: String!
    endDate: String!
  }

  input TermUpdateInput {
    personId: ID
    officeId: ID
    startDate: String
    endDate: String
  }

  input TermFilter {
    termId: IdFilter
    personId: IdFilter
    officeId: IdFilter
    startDate: DateFilter
    endDate: DateFilter
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allTerms(filter: TermFilter): [Term!]!
    termById(id: ID!): Term
  }

  extend type Mutation {
    createTerm(input: TermCreateInput!): Term
    updateTerm(id: ID!, input: TermUpdateInput!): Term
    deleteTerm(id: ID!): Term
  }
`;

export default typeDefs;
