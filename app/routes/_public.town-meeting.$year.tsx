import { LoaderFunctionArgs, json } from '@remix-run/cloudflare';
import {
  isRouteErrorResponse,
  Link,
  useRouteError,
  useLoaderData,
} from '@remix-run/react';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Toolbar,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '../components/Breadcrumbs';
import { encodeId, fetchGraphQL } from '~/utils';
import slugify from '@sindresorhus/slugify';

import type { TownMeetingSession } from '~/types';

const drawerWidth = 240;

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

export async function loader({ params, request }: LoaderFunctionArgs) {
  const query = `
    query AllTownMeetingSessions {
      allTownMeetingSessions(filter: { startDate: { gte: "${params.year}-01-01", lte: "${params.year}-12-31" } }) {
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

  return json(data.allTownMeetingSessions[0]);
}

export default function TownMeetingYear() {
  const tmSession: TownMeetingSession = useLoaderData();

  const year = new Date(tmSession.startDate).getFullYear();

  return (
    <>
      <Breadcrumbs />
      <Typography variant="h1" gutterBottom sx={{ marginTop: '0.5rem' }}>
        {year} Town Meeting
      </Typography>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Town Meeting Sessions
              </ListSubheader>
            }
          >
            {tmSession.warrantArticles?.map(
              (article) =>
                article && (
                  <>
                    <ListItemButton>
                      <Link
                        to={`/warrant-articles/wa-${article.articleNumber}-${slugify(article.articleTitle)}-${encodeId(article.warrantArticleId)}`}
                      >
                        {`WA-${article.articleNumber}: ${article?.articleTitle}`}
                      </Link>
                    </ListItemButton>
                  </>
                ),
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
