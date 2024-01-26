const typeDefs = `
type Election {
  election_id: ID!
  election_date: String!
  created_at: Int!
  updated_at: Int!
}

input ElectionInput {
  election_id: ID
  election_date: String
  created_at: Int
  updated_at: Int
}

extend type Query {
  allElections(filter: ElectionInput): [Election!]!
  electionById(id: ID!): Election
}
`;

export default typeDefs;
