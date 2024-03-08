const typeDefs = /* GraphQL */ `
  type TownMeetingSession {
    townMeetingSessionId: ID!
    startDate: String!
    sessionName: String!

    warrantArticles: [WarrantArticle]

    createdAt: Int!
    updatedAt: Int!
  }

  type TownMeetingSessionsWithPagination {
    items: [TownMeetingSession!]!
    pageInfo: PageInfo
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
      sort: [SortInput]
      limit: Int
      offset: Int
    ): TownMeetingSessionsWithPagination!
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
