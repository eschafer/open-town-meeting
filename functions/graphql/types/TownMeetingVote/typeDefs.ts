const typeDefs = /* GraphQL */ `
  type TownMeetingVote {
    townMeetingVoteId: ID!
    person: Person!
    motion: Motion!
    voteType: VoteType!
    createdAt: Int!
    updatedAt: Int!
  }

  type TownMeetingVotesWithPagination {
    items: [TownMeetingVote!]!
    pageInfo: PageInfo
  }

  input TownMeetingVoteCreateInput {
    townMeetingVoteId: ID
    personId: ID!
    motionId: ID!
    voteTypeId: ID!
  }

  input TownMeetingVoteUpdateInput {
    personId: ID
    motionId: ID
    voteTypeId: ID
  }

  input TownMeetingVoteFilter {
    townMeetingVoteId: IdFilter
    personId: IdFilter
    motionId: IdFilter
    voteTypeId: IdFilter
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allTownMeetingVotes(
      filter: TownMeetingVoteFilter
      sort: [SortInput]
      limit: Int
      offset: Int
    ): TownMeetingVotesWithPagination!
    townMeetingVoteById(id: ID!): TownMeetingVote
  }

  extend type Mutation {
    createTownMeetingVote(input: TownMeetingVoteCreateInput!): TownMeetingVote
    updateTownMeetingVote(
      id: ID!
      input: TownMeetingVoteUpdateInput!
    ): TownMeetingVote
    deleteTownMeetingVote(id: ID!): TownMeetingVote
  }
`;

export default typeDefs;
