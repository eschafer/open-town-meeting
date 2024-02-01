// After clicking the Google Sign-In button and signing in, the browser
// sends the ID token to the serverless function. The serverless function
// then sends the ID token to the Google Identity Toolkit API to exchange
// it for a Firebase ID token.
export async function onRequestPost({ request, env }) {
  const requestJson = await request.json();

  const API_KEY = env.GOOGLE_API_KEY;
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${API_KEY}`;
  const idToken = requestJson.data.credential;
  const providerId = 'google.com';

  const data = {
    requestUri: new URL(request.url).origin,
    postBody: `id_token=${idToken}&providerId=${providerId}`,
    returnSecureToken: true,
    returnIdpCredential: true,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      return new Response(
        JSON.stringify({
          idToken: data.idToken,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Set-Cookie': `idToken=${data.idToken}; HttpOnly; Path=/`,
          },
        },
      );
    })
    .catch((error) => console.error('Error:', error));
}
