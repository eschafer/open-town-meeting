import { json } from '@remix-run/cloudflare';
import { Link, useLoaderData } from '@remix-run/react';
import { Typography } from '@mui/material';
import { fetchGraphQL } from '../utils';

import type { MetaFunction } from '@remix-run/cloudflare';
import type {
  TownMeetingSession,
  TownMeetingSessionsWithPagination,
} from '~/types';

export const meta: MetaFunction = () => {
  return [
    { title: 'Home - Open Town Meeting' },
    { name: 'description', content: 'Welcome to Open Town Meeting!' },
  ];
};

export const loader = async ({ request }: { request: Request }) => {
  const query = `
    query AllTownMeetingSessions {
      allTownMeetingSessions {
          items {
              townMeetingSessionId
              startDate
              sessionName
              createdAt
              updatedAt
          }
      }
    }
  `;

  const rawData = (await fetchGraphQL({ query, request })) as {
    allTownMeetingSessions: TownMeetingSessionsWithPagination;
  };

  const data: TownMeetingSession[] = rawData.allTownMeetingSessions.items.map(
    (session) => {
      return {
        ...session,
        startDate: new Date(session.startDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      };
    },
  );

  return json(data);
};

export default function Index() {
  const sessions: TownMeetingSession[] = useLoaderData();

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Welcome!
      </Typography>
      <Link to={`/town-meeting/2024`}>2024</Link>
    </>
  );
}
