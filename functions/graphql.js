import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';
import { merge } from 'lodash';

import { createRemoteJWKSet, jwtVerify } from 'jose';

import precinctTypeDefs from './types/Precinct/typeDefs';
import electionTypeDefs from './types/Election/typeDefs';
import townMeetingSessionTypeDefs from './types/TownMeetingSession/typeDefs';
import voteTypeTypeDefs from './types/VoteType/typeDefs';
import personTypeDefs from './types/Person/typeDefs';
import committeeTypeDefs from './types/Committee/typeDefs';
import departmentTypeDefs from './types/Department/typeDefs';
import committeeMemberTypeDefs from './types/CommitteeMember/typeDefs';
import officeTypeDefs from './types/Office/typeDefs';
import raceTypeDefs from './types/Race/typeDefs';
import candidateTypeDefs from './types/Candidate/typeDefs';
import electionResultTypeDefs from './types/ElectionResult/typeDefs';
import termTypeDefs from './types/Term/typeDefs';
import warrantArticleTypeDefs from './types/WarrantArticle/typeDefs';
import motionTypeDefs from './types/Motion/typeDefs';
import petitionerTypeDefs from './types/Petitioner/typeDefs';
import townMeetingVoteTypeDefs from './types/TownMeetingVote/typeDefs';

import precinctResolvers from './types/Precinct/resolvers';
import electionResolvers from './types/Election/resolvers';
import townMeetingSessionResolvers from './types/TownMeetingSession/resolvers';
import voteTypeResolvers from './types/VoteType/resolvers';
import personResolvers from './types/Person/resolvers';
import committeeResolvers from './types/Committee/resolvers';
import departmentResolvers from './types/Department/resolvers';
import committeeMemberResolvers from './types/CommitteeMember/resolvers';
import officeResolvers from './types/Office/resolvers';
import raceResolvers from './types/Race/resolvers';
import candidateResolvers from './types/Candidate/resolvers';
import electionResultResolvers from './types/ElectionResult/resolvers';
import termResolvers from './types/Term/resolvers';
import warrantArticleResolvers from './types/WarrantArticle/resolvers';
import motionResolvers from './types/Motion/resolvers';
import petitionerResolvers from './types/Petitioner/resolvers';
import townMeetingVoteResolvers from './types/TownMeetingVote/resolvers';

const JWKS = createRemoteJWKSet(
  new URL(
    'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com',
  ),
);

const typeDefs = [
  precinctTypeDefs, // this needs to go first because it sets the base Query type (the rest extend it)
  electionTypeDefs,
  townMeetingSessionTypeDefs,
  voteTypeTypeDefs,
  personTypeDefs,
  committeeTypeDefs,
  departmentTypeDefs,
  committeeMemberTypeDefs,
  officeTypeDefs,
  raceTypeDefs,
  candidateTypeDefs,
  electionResultTypeDefs,
  termTypeDefs,
  warrantArticleTypeDefs,
  motionTypeDefs,
  petitionerTypeDefs,
  townMeetingVoteTypeDefs,
];

const resolvers = merge(
  precinctResolvers,
  electionResolvers,
  townMeetingSessionResolvers,
  voteTypeResolvers,
  personResolvers,
  committeeResolvers,
  departmentResolvers,
  committeeMemberResolvers,
  officeResolvers,
  raceResolvers,
  candidateResolvers,
  electionResultResolvers,
  termResolvers,
  warrantArticleResolvers,
  motionResolvers,
  petitionerResolvers,
  townMeetingVoteResolvers,
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export async function onRequest(context) {
  // Parse the request to get the query and variables
  const { query, variables } = await context.request.json();

  // Get the Cookie header
  const cookieHeader = context.request.headers.get('Cookie');

  // The Cookie header should contain the idToken
  // So, we need to parse the header to get the ID token
  const idToken =
    cookieHeader &&
    cookieHeader
      .split('; ')
      .find((row) => row.startsWith('idToken='))
      .split('=')[1];

  // The Authorization header should be in the format "Bearer <ID_TOKEN>"
  // So, we need to split the header to get the ID token
  // const idToken = authorizationHeader && authorizationHeader.split(' ')[1];

  // Verify the JWT
  try {
    await jwtVerify(idToken, JWKS);
  } catch (error) {
    // If the JWT is invalid, return an error response
    return new Response(JSON.stringify({ error: 'Invalid ID token' }), {
      status: 401,
    });
  }

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
