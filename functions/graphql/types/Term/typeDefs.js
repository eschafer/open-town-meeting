const typeDefs = `
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
`;

export default typeDefs;
