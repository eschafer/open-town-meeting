const typeDefs = /* GraphQL */ `
  type Candidate {
    candidateId: ID!
    person: Person!
    race: Race!

    electionResults: [ElectionResult]

    createdAt: Int!
    updatedAt: Int!
  }

  input CandidateCreateInput {
    candidateId: ID
    personId: ID!
    raceId: ID!
  }

  input CandidateUpdateInput {
    personId: ID
    raceId: ID
  }

  input CandidateFilter {
    candidateId: IdFilter
    personId: IdFilter
    raceId: IdFilter
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allCandidates(filter: CandidateFilter): [Candidate!]!
    candidateById(id: ID!): Candidate
  }

  extend type Mutation {
    createCandidate(input: CandidateCreateInput!): Candidate
    updateCandidate(id: ID!, input: CandidateUpdateInput!): Candidate
    deleteCandidate(id: ID!): Candidate
  }
`;

export default typeDefs;
