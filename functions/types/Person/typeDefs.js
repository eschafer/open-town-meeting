const typeDefs = `
type Person {
  person_id: ID!
  first_name: String!
  middle_name: String
  last_name: String!
  name_suffix: String
  precinct: Precinct
  address: String
  phone: String
  email: String
  created_at: Int!
  updated_at: Int!
}

extend type Query {
  allPeople(firstName: String, lastName: String): [Person!]!
  personById(id: ID!): Person
}
`;

export default typeDefs;
