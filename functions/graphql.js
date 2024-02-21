import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';
import { merge } from 'lodash';

import { createRemoteJWKSet, jwtVerify } from 'jose';

import precinctTypeDefs from './graphql/types/Precinct/typeDefs';
import electionTypeDefs from './graphql/types/Election/typeDefs';
import townMeetingSessionTypeDefs from './graphql/types/TownMeetingSession/typeDefs';
import voteTypeTypeDefs from './graphql/types/VoteType/typeDefs';
import personTypeDefs from './graphql/types/Person/typeDefs';
import committeeTypeDefs from './graphql/types/Committee/typeDefs';
import departmentTypeDefs from './graphql/types/Department/typeDefs';
import committeeMemberTypeDefs from './graphql/types/CommitteeMember/typeDefs';
import officeTypeDefs from './graphql/types/Office/typeDefs';
import raceTypeDefs from './graphql/types/Race/typeDefs';
import candidateTypeDefs from './graphql/types/Candidate/typeDefs';
import electionResultTypeDefs from './graphql/types/ElectionResult/typeDefs';
import termTypeDefs from './graphql/types/Term/typeDefs';
import warrantArticleTypeDefs from './graphql/types/WarrantArticle/typeDefs';
import motionTypeDefs from './graphql/types/Motion/typeDefs';
import petitionerTypeDefs from './graphql/types/Petitioner/typeDefs';
import townMeetingVoteTypeDefs from './graphql/types/TownMeetingVote/typeDefs';
import townMeetingVoteTallyTypeDefs from './graphql/types/TownMeetingVoteTally/typeDefs';
import townMeetingVoteResultTypeDefs from './graphql/types/TownMeetingVoteResult/typeDefs';

import precinctResolvers from './graphql/types/Precinct/resolvers';
import electionResolvers from './graphql/types/Election/resolvers';
import townMeetingSessionResolvers from './graphql/types/TownMeetingSession/resolvers';
import voteTypeResolvers from './graphql/types/VoteType/resolvers';
import personResolvers from './graphql/types/Person/resolvers';
import committeeResolvers from './graphql/types/Committee/resolvers';
import departmentResolvers from './graphql/types/Department/resolvers';
import committeeMemberResolvers from './graphql/types/CommitteeMember/resolvers';
import officeResolvers from './graphql/types/Office/resolvers';
import raceResolvers from './graphql/types/Race/resolvers';
import candidateResolvers from './graphql/types/Candidate/resolvers';
import electionResultResolvers from './graphql/types/ElectionResult/resolvers';
import termResolvers from './graphql/types/Term/resolvers';
import warrantArticleResolvers from './graphql/types/WarrantArticle/resolvers';
import motionResolvers from './graphql/types/Motion/resolvers';
import petitionerResolvers from './graphql/types/Petitioner/resolvers';
import townMeetingVoteResolvers from './graphql/types/TownMeetingVote/resolvers';
import townMeetingVoteTallyResolvers from './graphql/types/TownMeetingVoteTally/resolvers';
import townMeetingVoteResultResolvers from './graphql/types/TownMeetingVoteResult/resolvers';

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
  townMeetingVoteTallyTypeDefs,
  townMeetingVoteResultTypeDefs,
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
  townMeetingVoteTallyResolvers,
  townMeetingVoteResultResolvers,
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

export async function onRequest(context) {
  // Parse the request to get the query and variables
  const { query, variables } = await context.request.json();

  /*
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
  */

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
