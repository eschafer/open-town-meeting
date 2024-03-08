const typeDefs = /* GraphQL */ `
  type VoteType {
    voteTypeId: ID!
    voteTypeName: String!

    townMeetingVotes: [TownMeetingVote]

    createdAt: Int!
    updatedAt: Int!
  }

  type VoteTypesWithPagination {
    items: [VoteType!]!
    pageInfo: PageInfo
  }

  input VoteTypeCreateInput {
    voteTypeId: ID
    voteTypeName: String!
  }

  input VoteTypeUpdateInput {
    voteTypeName: String
  }

  input VoteTypeFilter {
    voteTypeId: IdFilter
    voteTypeName: StringFilter
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allVoteTypes(
      filter: VoteTypeFilter
      sort: [SortInput]
      limit: Int
      offset: Int
    ): VoteTypesWithPagination!
    voteTypeById(id: ID!): VoteType
  }

  extend type Mutation {
    createVoteType(input: VoteTypeCreateInput!): VoteType
    updateVoteType(id: ID!, input: VoteTypeUpdateInput!): VoteType
    deleteVoteType(id: ID!): VoteType
  }
`;

export default typeDefs;
