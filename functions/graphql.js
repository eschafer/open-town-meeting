import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';
import { merge } from 'lodash';

import precinctTypeDefs from './types/Precinct/typeDefs';
import electionTypeDefs from './types/Election/typeDefs';
import townMeetingSessionTypeDefs from './types/TownMeetingSession/typeDefs';
import voteTypeTypeDefs from './types/VoteType/typeDefs';
import personTypeDefs from './types/Person/typeDefs';
import officeTypeDefs from './types/Office/typeDefs';
import raceTypeDefs from './types/Race/typeDefs';
import candidateTypeDefs from './types/Candidate/typeDefs';
import electionResultTypeDefs from './types/ElectionResult/typeDefs';
import termTypeDefs from './types/Term/typeDefs';
import warrantArticleTypeDefs from './types/WarrantArticle/typeDefs';
import motionTypeDefs from './types/Motion/typeDefs';
import petitionerTypeDefs from './types/Petitioner/typeDefs';
import voteTypeDefs from './types/Vote/typeDefs';

import precinctResolvers from './types/Precinct/resolvers';
import electionResolvers from './types/Election/resolvers';
import personResolvers from './types/Person/resolvers';

const typeDefs = [
  precinctTypeDefs, // this needs to go first because it sets the base Query type (the rest extend it)
  electionTypeDefs,
  townMeetingSessionTypeDefs,
  voteTypeTypeDefs,
  personTypeDefs,
  officeTypeDefs,
  raceTypeDefs,
  candidateTypeDefs,
  electionResultTypeDefs,
  termTypeDefs,
  warrantArticleTypeDefs,
  motionTypeDefs,
  petitionerTypeDefs,
  voteTypeDefs,
];

const resolvers = merge(precinctResolvers, electionResolvers, personResolvers);

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
