const typeDefs = `
type TownMeetingVote {
  townMeetingVoteId: ID!
  person: Person!
  motion: Motion!
  voteType: VoteType
  createdAt: Int!
  updatedAt: Int!
}

input TownMeetingVoteInput {
  townMeetingVoteId: ID
  personId: ID
  motionId: ID
  voteTypeID: ID
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allTownMeetingVotes(filter: TownMeetingVoteInput): [TownMeetingVote!]!
  townMeetingVoteById(id: ID!): TownMeetingVote
}
`;

export default typeDefs;
