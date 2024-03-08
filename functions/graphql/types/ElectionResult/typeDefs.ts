const typeDefs = /* GraphQL */ `
  type ElectionResult {
    electionResultId: ID!
    candidate: Candidate!
    voteCount: Int
    createdAt: Int!
    updatedAt: Int!
  }

  type ElectionResultsWithPagination {
    items: [ElectionResult!]!
    pageInfo: PageInfo
  }

  input ElectionResultCreateInput {
    electionResultId: ID
    candidateId: ID!
    voteCount: Int
  }

  input ElectionResultUpdateInput {
    candidateId: ID
    voteCount: Int
  }

  input ElectionResultFilter {
    electionResultId: IdFilter
    candidateId: IdFilter
    voteCount: NumberFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allElectionResults(
      filter: ElectionResultFilter
    ): ElectionResultsWithPagination!
    electionResultById(id: ID!): ElectionResult
  }

  extend type Mutation {
    createElectionResult(input: ElectionResultCreateInput!): ElectionResult
    updateElectionResult(
      id: ID!
      input: ElectionResultUpdateInput!
    ): ElectionResult
    deleteElectionResult(id: ID!): ElectionResult
  }
`;

export default typeDefs;
