const typeDefs = `
type TownMeetingVoteResult {
  townMeetingVoteResultId: ID!
  motion: Motion!
  threshold: String
  voiceVotePassed: Boolean
  yesVotes: Int
  noVotes: Int
  isPassed: Boolean
}

input TownMeetingVoteResultInput {
  townMeetingVoteResultId: ID
  motionId: ID
  threshold: String
  voiceVotePassed: Boolean
  yesVotes: Int
  noVotes: Int
  isPassed: Boolean
}

extend type Query {
  allTownMeetingVoteResults(filter: TownMeetingVoteResultInput): [TownMeetingVoteResult!]!
  townMeetingVoteResultById(id: ID!): TownMeetingVoteResult
}
`;

export default typeDefs;
