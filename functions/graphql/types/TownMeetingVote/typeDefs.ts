const typeDefs = /* GraphQL */ `
  type TownMeetingVote {
    townMeetingVoteId: ID!
    person: Person!
    motion: Motion!
    voteType: VoteType
    createdAt: Int!
    updatedAt: Int!
  }

  input TownMeetingVoteInput {
    townMeetingVoteId: StringFilter
    personId: StringFilter
    motionId: StringFilter
    voteTypeID: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allTownMeetingVotes(filter: TownMeetingVoteInput): [TownMeetingVote!]!
    townMeetingVoteById(id: ID!): TownMeetingVote
  }

  extend type Mutation {
    createTownMeetingVote(input: TownMeetingVoteInput!): TownMeetingVote
    updateTownMeetingVote(
      id: ID!
      input: TownMeetingVoteInput!
    ): TownMeetingVote
    deleteTownMeetingVote(id: ID!): TownMeetingVote
  }
`;

export default typeDefs;
