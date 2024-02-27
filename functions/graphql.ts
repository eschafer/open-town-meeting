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

export async function onRequest({ request, env }: CustomFetchEvent) {
  const url = new URL(request.url);
  const contentType = request.headers.get('content-type');

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  if (contentType === null) {
    return new Response('Content-Type header is required', { status: 400 });
  }

  if (url.pathname === '/graphql' && contentType.includes('application/json')) {
    const body: GraphQLRequestBody = await request.json();
    const { query, variables } = body;

    if (!query) {
      return new Response('Query is required', { status: 400 });
    }

    const operationType = query.trim().startsWith('mutation')
      ? 'mutation'
      : 'query';

    if (operationType === 'mutation') {
      const cookies = cookie.parse(request.headers.get('Cookie') || '');
      const userToken = cookies.userToken;

      if (!userToken) {
        return new Response(JSON.stringify({ error: 'Missing user token' }), {
          status: 401,
        });
      }

      try {
        await validateFirebaseIdToken(userToken);
      } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid user token' }), {
          status: 401,
        });
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
      return new Response(JSON.stringify(response), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
      });
    }
  } else {
    return new Response('Not Found', { status: 404 });
  }
}
