const typeDefs = `
type TownMeetingSession {
  townMeetingSessionId: ID!
  startDate: String!
  sessionName: String!
  createdAt: Int!
  updatedAt: Int!
}

input TownMeetingSessionInput {
  townMeetingSessionId: ID
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
