const typeDefs = `
type ElectionResult {
  result_id: ID!
  candidate: Candidate!
  vote_count: Int
  created_at: Int!
  updated_at: Int!
}

extend type Query {
  allElectionResults: [ElectionResult!]!
  electionResultById(id: ID!): ElectionResult
}
`;

export default typeDefs;
