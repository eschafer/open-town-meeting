import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import validateFirebaseIdToken from './utils/validate-firebase-id-token';
import cookie from 'cookie';

import type { FetchEvent } from '@cloudflare/workers-types';

interface CustomFetchEvent extends FetchEvent {
  env: {
    DB: string;
  };
}

interface GraphQLRequestBody {
  query: string;
  variables: Record<string, unknown>;
}

const schema = makeExecutableSchema({ typeDefs, resolvers });

const createErrorResponse = (message: string, status: number) => {
  return new Response(JSON.stringify({ error: message }), {
    headers: { 'Content-Type': 'application/json' },
    status,
  });
};

export async function onRequest({ request, env }: CustomFetchEvent) {
  const url = new URL(request.url);
  const contentType = (request.headers.get('content-type') || '').split(';')[0];

  if (request.method !== 'POST') {
    return createErrorResponse('Method not allowed', 405);
  }

  if (contentType === null) {
    return createErrorResponse('Content-Type header is required', 400);
  }

  if (url.pathname === '/graphql' && contentType.includes('application/json')) {
    const body: GraphQLRequestBody = await request.json();
    const { query, variables } = body;

    if (!query) {
      return createErrorResponse('Query is required', 400);
    }

    const operationType = query.trim().startsWith('mutation')
      ? 'mutation'
      : 'query';

    if (operationType === 'mutation') {
      const cookies = cookie.parse(request.headers.get('Cookie') || '');
      const userToken = cookies.userToken;

      if (!userToken) {
        return createErrorResponse('Missing user token', 401);
      }

      try {
        await validateFirebaseIdToken(userToken);
      } catch (error) {
        return createErrorResponse('Invalid user token', 401);
      }
    }

    try {
      // Run the GraphQL query and return the response
      const response = await graphql({
        schema,
        source: query,
        variableValues: variables,
        rootValue: resolvers,
        contextValue: { db: env.DB },
      });
      return new Response(JSON.stringify(response), {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
      });
    } catch (error) {
      return createErrorResponse('Internal server error', 500);
    }
  } else {
    return createErrorResponse('Not Found', 404);
  }
}
