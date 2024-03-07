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

  input PetitionerCreateInput {
    petitionerId: ID
    motionId: ID!
    personId: ID
    departmentId: ID
    committeeId: ID
  }

  input PetitionerUpdateInput {
    motionId: ID
    personId: ID
    departmentId: ID
    committeeId: ID
  }

  input PetitionerFilter {
    petitionerId: IdFilter
    motionId: IdFilter
    personId: IdFilterNullable
    departmentId: IdFilterNullable
    committeeId: IdFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allPetitioners(filter: PetitionerFilter): [Petitioner!]!
    petitionerById(id: ID!): Petitioner
  }

  extend type Mutation {
    createPetitioner(input: PetitionerCreateInput!): Petitioner
    updatePetitioner(id: ID!, input: PetitionerUpdateInput!): Petitioner
    deletePetitioner(id: ID!): Petitioner
  }
`;

export default typeDefs;
