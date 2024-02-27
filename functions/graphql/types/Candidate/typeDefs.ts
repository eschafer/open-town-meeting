const typeDefs = /* GraphQL */ `
  type Candidate {
    candidateId: ID!
    person: Person!
    race: Race!

    electionResults: [ElectionResult]

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

  extend type Mutation {
    createCandidate(input: CandidateInput!): Candidate
    updateCandidate(id: ID!, input: CandidateInput!): Candidate
    deleteCandidate(id: ID!): Candidate
  }
`;

export default typeDefs;
