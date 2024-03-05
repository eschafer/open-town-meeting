const typeDefs = /* GraphQL */ `
  type Election {
    electionId: ID!
    electionDate: String!

    races: [Race]

    createdAt: Int!
    updatedAt: Int!
  }

  input ElectionInput {
    electionId: StringFilter
    electionDate: StringFilter
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allElections(filter: ElectionInput): [Election!]!
    electionById(id: ID!): Election
  }

  extend type Mutation {
    createElection(input: ElectionInput!): Election
    updateElection(id: ID!, input: ElectionInput!): Election
    deleteElection(id: ID!): Election
  }
`;

export default typeDefs;
