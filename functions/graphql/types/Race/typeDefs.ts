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

  input RaceInput {
    raceId: StringFilter
    officeId: StringFilter
    electionId: StringFilter
    termLength: NumberFilter
    seatsOpen: NumberFilter
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allRaces(filter: RaceInput): [Race!]!
    raceById(id: ID!): Race
  }

  extend type Mutation {
    createRace(input: RaceInput!): Race
    updateRace(id: ID!, input: RaceInput): Race
    deleteRace(id: ID!): Race
  }
`;

export default typeDefs;
