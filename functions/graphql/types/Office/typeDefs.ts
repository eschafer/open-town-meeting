const typeDefs = /* GraphQL */ `
  type Office {
    officeId: ID!
    officeName: String!
    precinct: Precinct

    races: [Race]
    terms: [Term]

    createdAt: Int!
    updatedAt: Int!
  }

  input OfficeCreateInput {
    officeId: ID
    officeName: String!
    precinctId: ID
  }

  input OfficeUpdateInput {
    officeName: String
    precinctId: ID
  }

  input OfficeFilter {
    officeId: IdFilter
    officeName: StringFilter
    precinctId: IdFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allOffices(filter: OfficeFilter): [Office!]!
    officeById(id: ID!): Office
  }

  extend type Mutation {
    createOffice(input: OfficeCreateInput!): Office
    updateOffice(id: ID!, input: OfficeUpdateInput!): Office
    deleteOffice(id: ID!): Office
  }
`;

export default typeDefs;
