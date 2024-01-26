const typeDefs = `
type TownMeetingSession {
  session_id: ID!
  start_date: String!
  session_name: String!
  created_at: Int!
  updated_at: Int!
}

input TownMeetingSessionInput {
  session_id: ID
  start_date: String
  session_name: String
  created_at: Int
  updated_at: Int
}

extend type Query {
  allTownMeetingSessions(filter: TownMeetingSessionInput): [TownMeetingSession!]!
  townMeetingSessionById(id: ID!): TownMeetingSession
}
`;

export default typeDefs;
