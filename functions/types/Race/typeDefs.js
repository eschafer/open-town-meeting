const typeDefs = `
type Race {
  raceId: ID!
  office: Office!
  election: Election!
  termLength: Int!
  createdAt: Int!
  updatedAt: Int!
}

input RaceInput {
  raceId: ID
  officeId: ID
  electionId: ID
  termLength: Int
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allRaces(filter: RaceInput): [Race!]!
  raceById(id: ID!): Race
}
`;

export default typeDefs;
