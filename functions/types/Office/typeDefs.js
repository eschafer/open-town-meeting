const typeDefs = `
type Office {
  officeId: ID!
  officeName: String!
  precinct: Precinct
  createdAt: Int!
  updatedAt: Int!
}

input OfficeInput {
  officeId: ID
  officeName: String
  precinct: PrecinctInput
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allOffices(filter: OfficeInput): [Office!]!
  officeById(id: ID!): Office
}
`;

export default typeDefs;
