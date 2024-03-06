const typeDefs = /* GraphQL */ `
  type TownMeetingSession {
    townMeetingSessionId: ID!
    startDate: String!
    sessionName: String!

    warrantArticles: [WarrantArticle]

    createdAt: Int!
    updatedAt: Int!
  }

  input TownMeetingSessionCreateInput {
    townMeetingSessionId: ID
    startDate: String!
    sessionName: String!
  }

  input TownMeetingSessionUpdateInput {
    startDate: String
    sessionName: String
  }

  input TownMeetingSessionFilter {
    townMeetingSessionId: IdFilter
    startDate: DateFilter
    sessionName: StringFilter
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allTownMeetingSessions(
      filter: TownMeetingSessionFilter
    ): [TownMeetingSession!]!
    townMeetingSessionById(id: ID!): TownMeetingSession
  }

  extend type Mutation {
    createTownMeetingSession(
      input: TownMeetingSessionCreateInput!
    ): TownMeetingSession
    updateTownMeetingSession(
      id: ID!
      input: TownMeetingSessionUpdateInput!
    ): TownMeetingSession
    deleteTownMeetingSession(id: ID!): TownMeetingSession
  }
`;

export default typeDefs;
