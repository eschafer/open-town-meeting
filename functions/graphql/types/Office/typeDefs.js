const typeDefs = `
type Office {
  officeId: ID!
  officeName: String!
  precinct: Precinct

  races: [Race]
  terms: [Term]

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

extend type Mutation {
  createOffice(input: OfficeInput!): Office
  updateOffice(id: ID!, input: OfficeInput!): Office
  deleteOffice(id: ID!): Office
}
`;

export default typeDefs;
