import validateFirebaseIdToken from '../../utils/validate-firebase-id-token';

import type { FetchEvent } from '@cloudflare/workers-types';

type LoginRequestBody = {
  token: string;
};

export async function onRequestPost({ request }: FetchEvent) {
  try {
    const { token }: LoginRequestBody = await request.json();

    if (!token) {
      throw new Error('Missing user token');
    }

    const response = await validateFirebaseIdToken(token);

    return new Response(JSON.stringify(response), {
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `userToken=${token}; HttpOnly; Secure; Path=/; SameSite=Lax;`,
      },
    });
  } catch (error) {
    let status = 500;

    if (error instanceof Error) {
      if (error.message === 'Missing user token') {
        status = 401;
      }

      return new Response(JSON.stringify({ error: error.message }), {
        status,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
