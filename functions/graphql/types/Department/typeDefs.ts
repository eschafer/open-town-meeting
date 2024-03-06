const typeDefs = /* GraphQL */ `
  type Department {
    departmentId: ID!
    departmentName: String!
    departmentUrl: String
    createdAt: Int!
    updatedAt: Int!
  }

  input DepartmentCreateInput {
    departmentId: ID
    departmentName: String!
    departmentUrl: String
  }

  input DepartmentUpdateInput {
    departmentName: String
    departmentUrl: String
  }

  input DepartmentFilter {
    departmentId: IdFilter
    departmentName: StringFilter
    departmentUrl: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allDepartments(filter: DepartmentFilter): [Department!]!
    departmentById(id: ID!): Department
  }

  extend type Mutation {
    createDepartment(input: DepartmentCreateInput!): Department
    updateDepartment(id: ID!, input: DepartmentUpdateInput!): Department
    deleteDepartment(id: ID!): Department
  }
`;

export default typeDefs;
