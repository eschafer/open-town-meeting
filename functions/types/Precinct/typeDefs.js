const typeDefs = `
type Precinct {
  precinct_id: ID!
  precinct_number: Int!
  census_year: Int!
  polling_place: String
  created_at: Int!
  updated_at: Int!
}

input PrecinctInput {
  precinct_id: ID
  precinct_number: Int
  census_year: Int
  polling_place: String
  created_at: Int
  updated_at: Int
}

type Query {
  allPrecincts(filter: PrecinctInput): [Precinct!]!
  precinctById(id: ID!): Precinct
}
`;

export default typeDefs;
