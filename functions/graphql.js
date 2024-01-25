import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';

const typeDefs = `
type Precinct {
  precinct_id: ID!
  precinct_number: Int!
  census_year: Int!
  polling_place: String
  created_at: Int!
  updated_at: Int!
}

type Person {
  person_id: ID!
  first_name: String!
  middle_name: String
  last_name: String!
  name_suffix: String
  precinct_id: ID
  address: String
  phone: String
  email: String
  created_at: Int!
  updated_at: Int!
  precinct: Precinct
}

type Query {
  # Precinct
  allPrecincts: [Precinct!]!
  precinctById(id: ID!): Precinct

  # Person
  allPeople: [Person!]!
  personById(id: ID!): Person
}`;

const resolvers = {
  Query: {
    async allPrecincts(root, args, { db }) {
      console.log('resolver: allPrecincts');
      const ps = db.prepare('SELECT * from precincts');
      const data = await ps.all();
      console.log(data.results);
      return data.results;
    },
    async precinctById(root, { id }, { db }) {
      console.log('resolver: precinctById');
      const ps = db
        .prepare('SELECT * from precincts WHERE precinct_id = ?')
        .bind(id);
      const data = await ps.run();

      if (!data.success) {
        throw new Error('No precinct found with id ' + id);
      }
      console.log(data.results[0]);
      return data.results[0];
    },
    async allPeople(root, args, { db }) {
      console.log('resolver: allPeople');
      const ps = db.prepare('SELECT * from people');
      const data = await ps.all();
      console.log(data.results);
      return data.results;
    },
    async personById(root, { id }, { db }) {
      console.log('resolver: personById');
      const ps = db
        .prepare('SELECT * from people WHERE person_id = ?')
        .bind(id);
      const data = await ps.run();

      if (!data.success) {
        throw new Error('No person found with id ' + id);
      }
      console.log(data.results[0]);
      return data.results[0];
    },
  },
  Person: {
    precinct: async (root, args, { db }) => {
      console.log('resolver: Person.precinct');
      const ps = db
        .prepare('SELECT * from precincts WHERE precinct_id = ?')
        .bind(root.precinct_id);
      const data = await ps.run();
      console.log(data.results[0]);
      return data.results[0];
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

export async function onRequest(context) {
  // Parse the request to get the query and variables
  const { query, variables } = await context.request.json();

  // Run the GraphQL query and return the response
  const response = await graphql({
    schema,
    source: query,
    variableValues: variables,
    rootValue: resolvers,
    contextValue: { db: context.env.DB },
  });

  return new Response(JSON.stringify(response), { status: 200 });
}
