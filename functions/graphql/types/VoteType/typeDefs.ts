const typeDefs = /* GraphQL */ `
  type VoteType {
    voteTypeId: ID!
    voteTypeName: String!

    townMeetingVotes: [TownMeetingVote]

    createdAt: Int!
    updatedAt: Int!
  }

  input VoteTypeInput {
    voteTypeId: StringFilter
    voteTypeName: StringFilter
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allVoteTypes(filter: VoteTypeInput): [VoteType!]!
    voteTypeById(id: ID!): VoteType
  }

  extend type Mutation {
    createVoteType(input: VoteTypeInput!): VoteType
    updateVoteType(id: ID!, input: VoteTypeInput!): VoteType
    deleteVoteType(id: ID!): VoteType
  }
`;

export default typeDefs;
