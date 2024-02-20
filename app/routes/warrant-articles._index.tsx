import { json } from '@remix-run/cloudflare';
import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from '@remix-run/react';

import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { fetchGraphQL } from '../utils';
import {
  CalendarMonth,
  Gavel,
  SubdirectoryArrowRight,
} from '@mui/icons-material';
import Breadcrumbs from '../components/Breadcrumbs';

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

  const rows = data.allWarrantArticles.map((article) => {
    return {
      sessionStartDate: article.townMeetingSession.startDate,
      sessionName: article.townMeetingSession.sessionName,
      articleId: article.warrantArticleId,
      articleNumber: article.articleNumber,
      articleTitle: article.articleTitle,
      articleDescription: article.articleDescription,
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
      <Breadcrumbs />
      <Typography variant="h1" gutterBottom sx={{ marginTop: '0.5rem' }}>
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
            <Card
              sx={
                {
                  // borderLeft: '16px solid #FACE00',
                }
              }
            >
              <CardContent>
                <Stack direction="row" spacing={1}>
                  <Typography variant="h5" component="div">
                    WA-{item.articleNumber}
                  </Typography>
                  <Stack direction="column" spacing={1}>
                    <Typography variant="h5">
                      <Link
                        to={`${item.articleId}/WA${item.articleNumber}-${item.articleTitle}`}
                      >
                        {item.articleTitle}
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.articleDescription}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label={new Date(item.sessionStartDate).getFullYear()}
                        icon={<CalendarMonth style={{ color: '#5c4809' }} />}
                        size="small"
                        sx={{
                          backgroundColor: '#FACE00',
                        }}
                      />
                      <Chip
                        label="Spring ATM"
                        icon={
                          <Gavel style={{ color: 'rgba(255, 255, 255, 1)' }} />
                        }
                        size="small"
                        sx={{
                          backgroundColor: '#0076D6',
                          color: '#ffffff',
                        }}
                      />
                      {/* this is for stm within tm */}
                      {item.sessionName !== 'ATM' && (
                        <Chip
                          label={item.sessionName}
                          icon={
                            <SubdirectoryArrowRight
                              style={{ color: '#ffffff' }}
                            />
                          }
                          size="small"
                          sx={{
                            backgroundColor: '#000000',
                            color: '#ffffff',
                          }}
                        />
                      )}
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
