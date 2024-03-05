interface ResponseData {
  data: Record<string, unknown[] | unknown>;
}

export default async function fetchGraphQL({
  query,
  request,
}: {
  query: string;
  request: Request;
}) {
  const url = new URL(request.url);
  const cookies = request.headers.get('Cookie');
  const userToken = cookies
    ?.split(';')
    .find((cookie) => cookie.trim().startsWith('userToken='))
    ?.split('=')[1];

  const response = await fetch(`${url.origin}/graphql`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, userToken }),
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const responseData: ResponseData = await response.json();

  return responseData.data;
}
