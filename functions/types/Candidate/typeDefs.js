const typeDefs = `
type Candidate {
  candidateId: ID!
  person: Person
  race: Race!
  createdAt: Int!
  updatedAt: Int!
}

input CandidateInput {
  candidateId: ID
  personId: ID
  raceId: ID
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allCandidates(filter: CandidateInput): [Candidate!]!
  candidateById(id: ID!): Candidate
}
`;

export default typeDefs;
