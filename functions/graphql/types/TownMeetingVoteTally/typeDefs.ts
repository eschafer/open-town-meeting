// NOTE: this doesn't have created_at and updated_at because
// it represents a view in the database and not a table

const typeDefs = /* GraphQL */ `
  type TownMeetingVoteTally {
    townMeetingVoteTallyId: ID!
    motion: Motion!
    voteType: VoteType!
    voteCount: Int!
  }

  input TownMeetingVoteTallyCreateInput {
    townMeetingVoteTallyId: ID
    motionId: ID!
    voteTypeId: ID!
    voteCount: Int!
  }

  input TownMeetingVoteTallyUpdateInput {
    motionId: ID
    voteTypeId: ID
    voteCount: Int
  }

  input TownMeetingVoteTallyFilter {
    townMeetingVoteTallyId: IdFilter
    motionId: IdFilter
    voteTypeId: IdFilter
    voteCount: NumberFilter
  }

  extend type Query {
    allTownMeetingVoteTallies(
      filter: TownMeetingVoteTallyFilter
    ): [TownMeetingVoteTally!]!
    townMeetingVoteTallyById(id: ID!): TownMeetingVoteTally
  }

  extend type Mutation {
    createTownMeetingVoteTally(
      input: TownMeetingVoteTallyCreateInput!
    ): TownMeetingVoteTally
    updateTownMeetingVoteTally(
      id: ID!
      input: TownMeetingVoteTallyUpdateInput!
    ): TownMeetingVoteTally
    deleteTownMeetingVoteTally(id: ID!): TownMeetingVoteTally
  }
`;

export default typeDefs;
