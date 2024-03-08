const typeDefs = /* GraphQL */ `
  type Race {
    raceId: ID!
    office: Office!
    election: Election!
    termLength: Int!
    seatsOpen: Int!
    createdAt: Int!
    updatedAt: Int!
  }

  type RacesWithPagination {
    items: [Race!]!
    pageInfo: PageInfo
  }

  input RaceCreateInput {
    raceId: ID
    officeId: ID!
    electionId: ID!
    termLength: Int!
    seatsOpen: Int!
  }

  input RaceUpdateInput {
    officeId: ID
    electionId: ID
    termLength: Int
    seatsOpen: Int
  }

  input RaceFilter {
    raceId: IdFilter
    officeId: IdFilter
    electionId: IdFilter
    termLength: NumberFilter
    seatsOpen: NumberFilter
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allRaces(
      filter: RaceFilter
      sort: [SortInput]
      limit: Int
      offset: Int
    ): RacesWithPagination!
    raceById(id: ID!): Race
  }

  extend type Mutation {
    createRace(input: RaceCreateInput!): Race
    updateRace(id: ID!, input: RaceUpdateInput): Race
    deleteRace(id: ID!): Race
  }
`;

export default typeDefs;
