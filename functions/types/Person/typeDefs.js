const typeDefs = `
type Person {
  personId: ID!
  firstName: String!
  middleName: String
  lastName: String!
  nameSuffix: String
  precinctId: ID
  precinct: Precinct
  address: String
  phone: String
  email: String
  createdAt: Int!
  updatedAt: Int!
}

input PersonInput {
  personId: ID
  firstName: String
  middleName: String
  lastName: String
  nameSuffix: String
  precinctId: ID
  address: String
  phone: String
  email: String
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allPeople(filter: PersonInput): [Person!]!
  personById(id: ID!): Person
}
`;

export default typeDefs;
