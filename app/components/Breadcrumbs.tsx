import { useLocation } from 'react-router-dom';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import { Link } from '@remix-run/react';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname
    .split('/')
    .filter((x) => !x.match(/(\d+|^$)/));

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" sx={{ fontSize: '1rem' }}>
      <MuiLink component={Link} to="/" color="inherit" underline="hover">
        Home
      </MuiLink>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const valueSentenceCase = value
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase());

        return (
          <MuiLink
            component={Link}
            to={to}
            color={last ? 'textPrimary' : 'inherit'}
            underline="hover"
            key={to}
            {...(last ? { 'aria-current': 'page' } : {})}
          >
            {valueSentenceCase}
          </MuiLink>
        );
      })}
    </MuiBreadcrumbs>
  );
}

export default Breadcrumbs;
