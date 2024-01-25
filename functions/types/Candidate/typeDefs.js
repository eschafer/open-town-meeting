const typeDefs = `
type Candidate {
  candidate_id: ID!
  person: Person!
  race: Race!
  created_at: Int!
  updated_at: Int!
}

extend type Query {
  allCandidates: [Candidate!]!
  candidateById(id: ID!): Candidate
}
`;

export default typeDefs;
