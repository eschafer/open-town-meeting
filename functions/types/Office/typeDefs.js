const typeDefs = `
type Office {
  office_id: ID!
  office_name: String!
  precinct: Precinct
  created_at: Int!
  updated_at: Int!
}

extend type Query {
  allOffices: [Office!]!
  officeById(id: ID!): Office
}
`;

export default typeDefs;
