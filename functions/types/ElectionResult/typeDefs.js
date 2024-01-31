const typeDefs = `
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
`;

export default typeDefs;
