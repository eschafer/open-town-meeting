const typeDefs = /* GraphQL */ `
  type ElectionResult {
    electionResultId: ID!
    candidate: Candidate!
    voteCount: Int
    createdAt: Int!
    updatedAt: Int!
  }

  input ElectionResultInput {
    electionResultId: ID
    candidateId: ID
    voteCount: Int
    createdAt: Int
    updatedAt: Int
  }

  extend type Query {
    allElectionResults(filter: ElectionResultInput): [ElectionResult!]!
    electionResultById(id: ID!): ElectionResult
  }

  extend type Mutation {
    createElectionResult(input: ElectionResultInput!): ElectionResult
    updateElectionResult(id: ID!, input: ElectionResultInput!): ElectionResult
    deleteElectionResult(id: ID!): ElectionResult
  }
`;

export default typeDefs;
