const typeDefs = /* GraphQL */ `
  enum SortDirection {
    ASC
    DESC
  }

  type PageInfo {
    totalCount: Int
    limit: Int
    offset: Int
    hasNextPage: Boolean
    hasPreviousPage: Boolean
  }

  input SortInput {
    field: String!
    direction: SortDirection = ASC
  }

  input IdFilter {
    eq: ID
    ne: ID
  }

  input IdFilterNullable {
    eq: ID
    ne: ID
    isNull: Boolean
  }

  input NumberFilter {
    eq: Int
    ne: Int
    gt: Int
    gte: Int
    lt: Int
    lte: Int
  }

  input NumberFilterNullable {
    eq: Int
    ne: Int
    gt: Int
    gte: Int
    lt: Int
    lte: Int
    isNull: Boolean
  }

  input DateFilter {
    eq: String
    ne: String
    gt: String
    gte: String
    lt: String
    lte: String
  }

  input DateFilterNullable {
    eq: String
    ne: String
    gt: String
    gte: String
    lt: String
    lte: String
    isNull: Boolean
  }

  input StringFilter {
    exact: String
    contains: String
    startsWith: String
    endsWith: String
  }

  input StringFilterNullable {
    exact: String
    contains: String
    startsWith: String
    endsWith: String
    isNull: Boolean
  }

  input BooleanFilter {
    eq: Boolean
  }

  input BooleanFilterNullable {
    eq: Boolean
    isNull: Boolean
  }
`;

export default typeDefs;
