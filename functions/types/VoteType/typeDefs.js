const typeDefs = `
type VoteType {
  vote_type_id: ID!
  vote_type_name: String!
  created_at: Int!
  updated_at: Int!
}

extend type Query {
  allVoteTypes: [VoteType!]!
  voteTypesById(id: ID!): VoteType
}
`;

export default typeDefs;
