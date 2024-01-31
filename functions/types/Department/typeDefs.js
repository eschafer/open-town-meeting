const typeDefs = `
type Department {
  departmentId: ID!
  departmentName: String!
  departmentUrl: String
  createdAt: Int!
  updatedAt: Int!
}

input DepartmentInput {
  departmentId: ID
  departmentName: String
  departmentUrl: String
  createdAt: Int
  updatedAt: Int
}

extend type Query {
  allDepartments(filter: DepartmentInput): [Department!]!
  departmentById(id: ID!): Department
}
`;

export default typeDefs;
