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

  input TermInput {
    termId: ID
    personId: ID
    officeId: ID
    startDate: String
    endDate: String
    createdAt: Int
    updatedAt: Int
  }

  extend type Query {
    allTerms(filter: TermInput): [Term!]!
    termById(id: ID!): Term
  }

  extend type Mutation {
    createTerm(input: TermInput!): Term
    updateTerm(id: ID!, input: TermInput!): Term
    deleteTerm(id: ID!): Term
  }
`;

export default typeDefs;