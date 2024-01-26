const typeDefs = `
type Motion {
  motion_id: ID!
  warrantArticle: WarrantArticle!
  motion_title: String!
  motion_description: String
  created_at: Int!
  updated_at: Int!
}

extend type Query {
  allMotions: [Motion!]!
  motionById(id: ID!): Motion
}
`;

export default typeDefs;
