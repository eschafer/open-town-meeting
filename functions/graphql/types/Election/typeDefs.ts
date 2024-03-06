const typeDefs = /* GraphQL */ `
  type Election {
    electionId: ID!
    electionDate: String!

    races: [Race]

    createdAt: Int!
    updatedAt: Int!
  }

  input ElectionCreateInput {
    electionId: ID
    electionDate: String!
  }

  input ElectionUpdateInput {
    electionDate: String
  }

  input ElectionFilter {
    electionId: IdFilter
    electionDate: DateFilter
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allElections(filter: ElectionFilter): [Election!]!
    electionById(id: ID!): Election
  }

  extend type Mutation {
    createElection(input: ElectionCreateInput!): Election
    updateElection(id: ID!, input: ElectionUpdateInput!): Election
    deleteElection(id: ID!): Election
  }
`;

export default typeDefs;
