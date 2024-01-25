const typeDefs = `
type Precinct {
  precinct_id: ID!
  precinct_number: Int!
  census_year: Int!
  polling_place: String
  created_at: Int!
  updated_at: Int!
}

type Query {
  allPrecincts: [Precinct!]!
  precinctById(id: ID!): Precinct
}
`;

export default typeDefs;
