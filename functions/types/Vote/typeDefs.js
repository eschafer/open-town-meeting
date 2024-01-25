const typeDefs = `
type Vote {
  person: Person!
  motion: Motion!
  voteType: VoteType!
  created_at: Int!
  updated_at: Int!
}

extend type Query {
  allVotes: [Vote!]!
  voteById(id: ID!): Vote
}
`;

export default typeDefs;
