const typeDefs = /* GraphQL */ `
  type TownMeetingSession {
    townMeetingSessionId: ID!
    startDate: String!
    sessionName: String!

    warrantArticles: [WarrantArticle]

    createdAt: Int!
    updatedAt: Int!
  }

  input TownMeetingSessionInput {
    townMeetingSessionId: StringFilter
    startDate: DateFilter
    sessionName: StringFilter
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allTownMeetingSessions(
      filter: TownMeetingSessionInput
    ): [TownMeetingSession!]!
    townMeetingSessionById(id: ID!): TownMeetingSession
  }

  extend type Mutation {
    createTownMeetingSession(
      input: TownMeetingSessionInput!
    ): TownMeetingSession
    updateTownMeetingSession(
      id: ID!
      input: TownMeetingSessionInput!
    ): TownMeetingSession
    deleteTownMeetingSession(id: ID!): TownMeetingSession
  }
`;

export default typeDefs;
