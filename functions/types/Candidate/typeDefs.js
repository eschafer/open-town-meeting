const typeDefs = `
type Candidate {
  candidate_id: ID!
  person: Person
  race: Race!
  created_at: Int!
  updated_at: Int!
}

input CandidateInput {
  candidate_id: ID
  created_at: Int
  updated_at: Int
}

extend type Query {
  allCandidates(filter: CandidateInput): [Candidate!]!
  candidateById(id: ID!): Candidate
}
`;

export default typeDefs;
