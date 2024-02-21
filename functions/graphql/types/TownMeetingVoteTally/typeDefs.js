const typeDefs = `
type TownMeetingVoteTally {
  townMeetingVoteTallyId: ID!
  motion: Motion
  voteType: VoteType
  voteCount: Int!
}

input TownMeetingVoteTallyInput {
  townMeetingVoteTallyId: ID
  motionId: ID
  voteTypeId: ID
  voteCount: Int
}

extend type Query {
  allTownMeetingVoteTallies(filter: TownMeetingVoteTallyInput): [TownMeetingVoteTally!]!
  townMeetingVoteTallyById(id: ID!): TownMeetingVoteTally
}
`;

export default typeDefs;
