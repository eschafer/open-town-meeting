import inputTypeDefs from '../inputTypeDefs';

const typeDefs = /* GraphQL */ `
  enum SortDirection {
    ASC
    DESC
  }

  input SortInput {
    field: String!
    direction: SortDirection!
  }

  ${inputTypeDefs}

  """
  A Brookline precinct based off a specific census year.
  """
  type Precinct {
    """
    The unique identifier for the precinct.
    """
    precinctId: ID!
    """
    The precinct number.
    """
    precinctNumber: Int!
    """
    The census year the precinct is based off of.
    """
    censusYear: Int!
    """
    The polling place for the precinct.
    """
    pollingPlace: String

    """
    The offices that are elected that are specific to the precinct.
    """
    offices: [Office]

    """
    The date the precinct was created (Unix time).
    """
    createdAt: Int!
    """
    The date the precinct was last updated (Unix time).
    """
    updatedAt: Int!
  }

  input PrecinctCreateInput {
    precinctId: ID
    precinctNumber: Int!
    censusYear: Int!
    pollingPlace: String
  }

  input PrecinctUpdateInput {
    precinctNumber: Int
    censusYear: Int
    pollingPlace: String
  }

  input PrecinctFilter {
    precinctId: IdFilter
    precinctNumber: NumberFilter
    censusYear: NumberFilter
    pollingPlace: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  type Query {
    allPrecincts(
      sort: [SortInput]
      filter: PrecinctFilter
      limit: Int
      offset: Int
    ): [Precinct!]!
    precinctById(id: ID!): Precinct
  }

  type Mutation {
    createPrecinct(input: PrecinctCreateInput!): Precinct
    updatePrecinct(id: ID!, input: PrecinctUpdateInput!): Precinct
    deletePrecinct(id: ID!): Precinct
  }
`;

export default typeDefs;
