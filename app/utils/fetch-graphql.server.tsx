interface ResponseData {
  data: Record<string, unknown[]>;
}

export default async function fetchGraphQL({
  query,
  request,
}: {
  query: string;
  request: Request;
}) {
  console.log('fetchGraphQL');
  const url = new URL(request.url);
  const cookies = request.headers.get('Cookie');
  const idToken = cookies
    ?.split(';')
    .find((cookie) => cookie.trim().startsWith('idToken='))
    ?.split('=')[1];

  console.log('1');
  const response = await fetch(`${url.origin}/graphql`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    // credentials: 'include',
    body: JSON.stringify({ query, idToken }),
  });
  console.log('2 response', response);

  console.log('fetchGraphQL response', response);

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const responseData: ResponseData = await response.json();

  return responseData.data;
}
