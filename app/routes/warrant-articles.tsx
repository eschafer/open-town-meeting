import { json } from '@remix-run/cloudflare';
import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react';

import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { fetchGraphQL } from '../utils';

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}

export const loader = async ({ request }: { request: Request }) => {
  const query = `
    query AllWarrantArticles {
      allWarrantArticles {
        warrantArticleId
        articleNumber
        articleTitle
        articleDescription
        createdAt
        updatedAt
        townMeetingSession {
          townMeetingSessionId
          startDate
          sessionName
          createdAt
          updatedAt
        }
      }
    }
  `;

  const data = await fetchGraphQL({ query, request });
  console.log(data);

  const rows = data.allWarrantArticles.map((article) => {
    return {
      session: article.townMeetingSession.startDate,
      number: article.articleNumber,
      title: article.articleTitle,
      description: article.articleDescription,
    };
  });

  return json(rows);
};

export default function WarrantArticles() {
  const rows = useLoaderData();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Warrant Articles
      </Typography>

      <Grid
        component="ul"
        container
        spacing={3}
        sx={{ margin: 0, padding: 0, width: '100%', listStyle: 'none' }}
      >
        {rows.map((item, index) => (
          <Grid
            component="li"
            item
            xs={12}
            key={index}
            sx={{ paddingLeft: '0 !important' }}
          >
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.session} WA-{item.number}
                  <br />
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
