const typeDefs = `
type Petitioner {
  person: Person!
  motion: Motion!
  createdAt: Int!
  updatedAt: Int!
}

input PetitionerInput {
  personId: ID
  motionId: ID
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allPetitioners(filter: PetitionerInput): [Petitioner!]!
  petitionerById(id: ID!): Petitioner
}
`;

export default typeDefs;
