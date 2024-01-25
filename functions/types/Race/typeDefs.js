const typeDefs = `
type Race {
  race_id: ID!
  office: Office!
  election: Election!
  term_length: Int!
  created_at: Int!
  updated_at: Int!
}

extend type Query {
  allRaces: [Race!]!
  raceById(id: ID!): Race
}
`;

export default typeDefs;
