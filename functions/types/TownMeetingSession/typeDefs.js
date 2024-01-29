const typeDefs = `
type TownMeetingSession {
  sessionId: ID!
  startDate: String!
  sessionName: String!
  createdAt: Int!
  updatedAt: Int!
}

input TownMeetingSessionInput {
  sessionId: ID
  startDate: String
  sessionName: String
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allTownMeetingSessions(filter: TownMeetingSessionInput): [TownMeetingSession!]!
  townMeetingSessionById(id: ID!): TownMeetingSession
}
`;

export default typeDefs;
