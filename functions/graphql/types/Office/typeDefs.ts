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

  input OfficeInput {
    officeId: StringFilter
    officeName: StringFilter
    precinctId: NumberFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allOffices(filter: OfficeInput): [Office!]!
    officeById(id: ID!): Office
  }

  extend type Mutation {
    createOffice(input: OfficeInput!): Office
    updateOffice(id: ID!, input: OfficeInput!): Office
    deleteOffice(id: ID!): Office
  }
`;

export default typeDefs;
