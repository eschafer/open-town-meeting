import { json, LoaderFunction } from '@remix-run/cloudflare';
import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from '@remix-run/react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { encodeId, fetchGraphQL } from '../utils';
import {
  CalendarMonth,
  Gavel,
  SubdirectoryArrowRight,
} from '@mui/icons-material';
import Breadcrumbs from '../components/Breadcrumbs';
import slugify from '@sindresorhus/slugify';

import type { LoaderFunctionArgs } from '@remix-run/cloudflare';
import type { TownMeetingSession, WarrantArticle } from '~/types';

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

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const query = `
    query AllTownMeetingSessions {
      allTownMeetingSessions(filter: { startDate: { gte: "2024-01-01", lte: "2024-12-31" } }) {
        warrantArticles {
          warrantArticleId
          articleNumber
          articleTitle
          articleDescription
          townMeetingSession {
            townMeetingSessionId
            startDate
            sessionName
          }
        }
      }
    }
  `;

  const data = (await fetchGraphQL({ query, request })) as {
    allTownMeetingSessions: TownMeetingSession[];
  };

  return json(data.allTownMeetingSessions);
};

export default function WarrantArticles() {
  const sessions: TownMeetingSession[] = useLoaderData();

  const articles: WarrantArticle[] = sessions.reduce((acc, session) => {
    return acc.concat(session.warrantArticles);
  }, []);

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
        {articles.map((article, index) => (
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
                    WA-{article.articleNumber}
                  </Typography>
                  <Stack direction="column" spacing={1}>
                    <Typography variant="h5">
                      <Link
                        to={`wa-${article.articleNumber}-${slugify(article.articleTitle)}-${encodeId(article.warrantArticleId)}`}
                      >
                        {article.articleTitle}
                      </Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {article.articleDescription}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label={new Date(
                          article.townMeetingSession.startDate,
                        ).getFullYear()}
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
                      {article.townMeetingSession.sessionName !== 'ATM' && (
                        <Chip
                          label={article.townMeetingSession.sessionName}
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
