import { LoaderFunctionArgs, json } from '@remix-run/cloudflare';
import {
  isRouteErrorResponse,
  useRouteError,
  useLoaderData,
} from '@remix-run/react';
import Typography from '@mui/material/Typography';
import Markdown from 'react-markdown';
import Breadcrumbs from '../components/Breadcrumbs';
import { fetchGraphQL } from '~/utils';

interface WarrantArticle {
  articleNumber: string;
  articleTitle: string;
  articleDescription: string;
}

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
    query AllWarrantArticles {
      allWarrantArticles(filter: { warrantArticleId: "${params.id}" }) {
        articleNumber
        articleTitle
        articleDescription
      }
    }
  `;

  const data = (await fetchGraphQL({ query, request })) as {
    allWarrantArticles: WarrantArticle[];
  };

  const { articleNumber, articleTitle } = data.allWarrantArticles[0];

  return json({
    articleNumber,
    articleTitle,
    articleDescription: `**Vote on whether to approve two people as Measurers of Wood and Bark.**

  This article is a Brookline Town Meeting tradition - made mandatory in 2000 - from a time when wood was a source of fuel delivered from rural areas by the cord. Each year, the Select Board is called upon to “appoint” two Measurers of Wood and Bark. When this position was relevant, the measurer’s task was to ensure that cords of firewood sold in Brookline measure eight feet long, four feet wide and four feet high as a form of consumer protection. **This WA is only ceremonial.**`,
  });
}

export default function WarrantArticle() {
  const data = useLoaderData() as WarrantArticle;

  return (
    <>
      <Breadcrumbs />
      <Typography variant="h1" gutterBottom sx={{ marginTop: '0.5rem' }}>
        WA-{data.articleNumber} {data.articleTitle}
      </Typography>

      <Markdown>{data.articleDescription}</Markdown>
    </>
  );
}
