const typeDefs = `
type Vote {
  person: Person!
  motion: Motion!
  voteType: VoteType!
  createdAt: Int!
  updatedAt: Int!
}

input VoteInput {
  personId: ID
  motionId: ID
  voteTypeID: ID
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allVotes(filter: VoteInput): [Vote!]!
  voteById(id: ID!): Vote
}
`;

export default typeDefs;
