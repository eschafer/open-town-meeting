const typeDefs = `
type Petitioner {
  petitionerId: ID!
  motion: Motion!
  person: Person
  department: Department
  committee: Committee
  createdAt: Int!
  updatedAt: Int!
}

input PetitionerInput {
  petitionerId: ID
  motionId: ID
  personId: ID
  departmentId: ID
  committeeId: ID
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allPetitioners(filter: PetitionerInput): [Petitioner!]!
  petitionerById(id: ID!): Petitioner
}
`;

export default typeDefs;
