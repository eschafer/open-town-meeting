const typeDefs = `
type Petitioner {
  person: Person!
  motion: Motion!
  created_at: Int!
  updated_at: Int!
}

extend type Query {
  allPetitioners: [Petitioner!]!
  petitionerById(id: ID!): Petitioner
}
`;

export default typeDefs;
