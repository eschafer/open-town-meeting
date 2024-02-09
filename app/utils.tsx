interface ResponseData {
  data: Record<string, unknown[]>;
}

export async function fetchGraphQL({ query, request }: { query: string, request: Request }) {
  const url = new URL(request.url);
  const response = await fetch(`${url.origin}/graphql`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const responseData:ResponseData = await response.json();

  return responseData.data;
}