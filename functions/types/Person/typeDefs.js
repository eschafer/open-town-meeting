const typeDefs = `
type Person {
  personId: ID!
  firstName: String!
  middleName: String
  lastName: String!
  nameSuffix: String
  address: String
  email: String
  phone: String
  createdAt: Int!
  updatedAt: Int!
}

input PersonInput {
  personId: ID
  firstName: String
  middleName: String
  lastName: String
  nameSuffix: String
  address: String
  email: String
  phone: String
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allPeople(filter: PersonInput): [Person!]!
  personById(id: ID!): Person
}
`;

export default typeDefs;
