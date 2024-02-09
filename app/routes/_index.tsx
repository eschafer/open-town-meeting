import type { MetaFunction } from '@remix-run/cloudflare';
import Typography from '@mui/material/Typography';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <Typography variant="h1" gutterBottom>
      Home
    </Typography>
  );
}
