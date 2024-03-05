const typeDefs = /* GraphQL */ `
  type Department {
    departmentId: ID!
    departmentName: String!
    departmentUrl: String
    createdAt: Int!
    updatedAt: Int!
  }

  input DepartmentInput {
    departmentId: StringFilter
    departmentName: StringFilter
    departmentUrl: StringFilterNullable
    createdAt: NumberFilter
    updatedAt: NumberFilter
  }

  extend type Query {
    allDepartments(filter: DepartmentInput): [Department!]!
    departmentById(id: ID!): Department
  }

  extend type Mutation {
    createDepartment(input: DepartmentInput!): Department
    updateDepartment(id: ID!, input: DepartmentInput!): Department
    deleteDepartment(id: ID!): Department
  }
`;

export default typeDefs;
