const typeDefs = `
type Precinct {
  precinctId: ID!
  precinctNumber: Int!
  censusYear: Int!
  pollingPlace: String

  offices: [Office]

  createdAt: Int!
  updatedAt: Int!
}

input PrecinctInput {
  precinctId: ID
  precinctNumber: Int
  censusYear: Int
  pollingPlace: String
  createdAt: Int
  updatedAt: Int
}

type Query {
  allPrecincts(filter: PrecinctInput): [Precinct!]!
  precinctById(id: ID!): Precinct
}

type Mutation {
  createPrecinct(input: PrecinctInput!): Precinct
  updatePrecinct(id: ID!, input: PrecinctInput!): Precinct
  deletePrecinct(id: ID!): Precinct
}
`;

export default typeDefs;
