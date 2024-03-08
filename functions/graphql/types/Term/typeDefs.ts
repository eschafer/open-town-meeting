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

  type TermsWithPagination {
    items: [Term!]!
    pageInfo: PageInfo
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
    allTerms(
      filter: TermFilter
      sort: [SortInput]
      limit: Int
      offset: Int
    ): TermsWithPagination!
    termById(id: ID!): Term
  }

  extend type Mutation {
    createTerm(input: TermCreateInput!): Term
    updateTerm(id: ID!, input: TermUpdateInput!): Term
    deleteTerm(id: ID!): Term
  }
`;

export default typeDefs;
