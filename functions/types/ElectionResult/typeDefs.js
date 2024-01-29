const typeDefs = `
type ElectionResult {
  resultId: ID!
  candidate: Candidate!
  voteCount: Int
  createdAt: Int!
  updatedAt: Int!
}

input ElectionResultInput {
  resultId: ID
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
