const typeDefs = `
type TownMeetingSession {
  townMeetingSessionId: ID!
  startDate: String!
  sessionName: String!

  warrantArticles: [WarrantArticle]

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

extend type Mutation {
  createTownMeetingSession(input: TownMeetingSessionInput!): TownMeetingSession
  updateTownMeetingSession(id: ID!, input: TownMeetingSessionInput!): TownMeetingSession
  deleteTownMeetingSession(id: ID!): TownMeetingSession
}
`;

export default typeDefs;
