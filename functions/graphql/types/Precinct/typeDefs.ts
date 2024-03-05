import inputTypeDefs from '../inputTypeDefs';

const typeDefs = /* GraphQL */ `
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

  input PrecinctInput {
    precinctId: StringFilter
    precinctNumber: NumberFilter
    censusYear: NumberFilter
    pollingPlace: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  type Query {
    allPrecincts(filter: PrecinctInput): [Precinct!]!
    precinctById(id: ID!): Precinct
  }

  type Mutation {
    createPrecinct(input: PrecinctInput!): Precinct
    updatePrecinct(id: ID!, input: PrecinctInput!): Precinct
    deletePrecinct(id: ID!): Precinct
  }
`;

export default typeDefs;
