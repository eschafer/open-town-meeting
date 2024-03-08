// NOTE: this doesn't have created_at and updated_at because
// it represents a view in the database and not a table

const typeDefs = /* GraphQL */ `
  type TownMeetingVoteResult {
    townMeetingVoteResultId: ID!
    motion: Motion!
    threshold: String
    voiceVotePassed: Boolean
    yesVotes: Int
    noVotes: Int
    isPassed: Boolean
  }

  type TownMeetingVoteResultsWithPagination {
    items: [TownMeetingVoteResult!]!
    pageInfo: PageInfo
  }

  input TownMeetingVoteResultCreateInput {
    townMeetingVoteResultId: ID
    motionId: ID!
    threshold: String
    voiceVotePassed: Boolean
    yesVotes: Int
    noVotes: Int
    isPassed: Boolean
  }

  input TownMeetingVoteResultUpdateInput {
    motionId: ID
    threshold: String
    voiceVotePassed: Boolean
    yesVotes: Int
    noVotes: Int
    isPassed: Boolean
  }

  input TownMeetingVoteResultFilter {
    townMeetingVoteResultId: IdFilter
    motionId: IdFilter
    threshold: StringFilterNullable
    voiceVotePassed: BooleanFilterNullable
    yesVotes: NumberFilterNullable
    noVotes: NumberFilterNullable
    isPassed: BooleanFilterNullable
  }

  extend type Query {
    allTownMeetingVoteResults(
      filter: TownMeetingVoteResultFilter
      sort: [SortInput]
      limit: Int
      offset: Int
    ): TownMeetingVotesWithPagination!
    townMeetingVoteResultById(id: ID!): TownMeetingVoteResult
  }

  extend type Mutation {
    createTownMeetingVoteResult(
      input: TownMeetingVoteResultCreateInput!
    ): TownMeetingVoteResult
    updateTownMeetingVoteResult(
      id: ID!
      input: TownMeetingVoteResultUpdateInput!
    ): TownMeetingVoteResult
    deleteTownMeetingVoteResult(id: ID!): TownMeetingVoteResult
  }
`;

export default typeDefs;
