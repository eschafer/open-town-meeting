const typeDefs = `
type Term {
  term_id: ID!
  person: Person!
  office: Office!
  start_date: String!
  end_date: String!
  created_at: Int!
  updated_at: Int!
}

extend type Query {
  allTerms: [Term!]!
  termById(id: ID!): Term
}
`;

export default typeDefs;
