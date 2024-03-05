const typeDefs = /* GraphQL */ `
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
    petitionerId: StringFilter
    motionId: StringFilter
    personId: StringFilterNullable
    departmentId: StringFilterNullable
    committeeId: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allPetitioners(filter: PetitionerInput): [Petitioner!]!
    petitionerById(id: ID!): Petitioner
  }

  extend type Mutation {
    createPetitioner(input: PetitionerInput!): Petitioner
    updatePetitioner(id: ID!, input: PetitionerInput!): Petitioner
    deletePetitioner(id: ID!): Petitioner
  }
`;

export default typeDefs;
