import type { LinksFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MuiLink from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Menu as MenuIcon } from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2';
import { AuthProvider } from './auth';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  {
    rel: 'preload',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preload',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Inter:wght@400;700&display=swap',
  },
];

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#053d70',
    },
    secondary: {
      main: '#af2100',
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      default: '#f7f7f6',
    },
  },
  typography: {
    h1: {
      fontFamily:
        '"Merriweather", "Georgia", "Cambria", "Times New Roman", "Times", serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily:
        '"Merriweather", "Georgia", "Cambria", "Times New Roman", "Times", serif',
      fontSize: '1.71rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily:
        '"Merriweather", "Georgia", "Cambria", "Times New Roman", "Times", serif',
      fontSize: '1.22rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily:
        '"Merriweather", "Georgia", "Cambria", "Times New Roman", "Times", serif',
      fontSize: '.98rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h5: {
      fontFamily:
        '"Inter",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    body1: {
      fontFamily:
        '"Inter",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: '1.22rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontFamily:
        '"Inter",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: '1.06rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontFamily:
        'Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;',
      fontSize: '1.06rem',
      fontWeight: 700,
      lineHeight: 0.9,
      textTransform: 'inherit',
    },
    caption: {
      fontFamily:
        '"Inter",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    overline: {
      fontFamily:
        '"Inter",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: '0.88rem',
      fontWeight: 400,
      lineHeight: 1.5,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
    },
    fontFamily:
      '"Inter",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: 16,
  },
});

export default function App() {
  const navLinks = [
    { to: '/warrant-articles', label: 'Warrant Articles' },
    { to: '/budget', label: 'Budget' },
    { to: '/town-meeting', label: 'Town Meeting' },
    { to: '/town-meeting-members', label: 'Town Meeting Members' },
    { to: '/committees', label: 'Committees' },
  ];
  return (
    <>
      <CssBaseline />
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <AuthProvider>
            <ThemeProvider theme={lightTheme}>
              <Box display="flex" flexDirection="column" minHeight="100vh">
                <Box component="header">
                  <a href="#main-content">Skip to main content</a>
                  <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color="transparent" elevation={0}>
                      <Toolbar>
                        <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                        >
                          <MenuIcon />
                        </IconButton>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{ flexGrow: 1 }}
                        >
                          Open Town Meeting
                        </Typography>
                        <Button color="inherit">Login</Button>
                      </Toolbar>
                    </AppBar>
                  </Box>
                  <Box component="nav" aria-label="Primary navigation">
                    <Stack
                      component="ul"
                      direction="row"
                      spacing={4}
                      justifyContent="center"
                      alignItems="center"
                    >
                      {navLinks.map((link) => (
                        <Box
                          component="li"
                          key={link.to}
                          display="inline-block"
                        >
                          <MuiLink
                            component={NavLink}
                            to={link.to}
                            underline="none"
                            display="inline-block"
                            p={1}
                          >
                            <Typography variant="button" component="div">
                              {link.label}
                            </Typography>
                          </MuiLink>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Box>
                <Box component="main" id="main-content" flexGrow={1}>
                  <Outlet />
                </Box>
                <Box component="footer">
                  <Box component="ul">
                    <Box component="li">
                      <Link to="/accessibility">Accessibility</Link>
                    </Box>
                    <Box component="li">
                      <Link to="/privacy">Privacy Policy</Link>
                    </Box>
                    <Box component="li">
                      <a href="mailto:info@opentownmeeting.org">
                        info@opentownmeeting.org
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </ThemeProvider>
          </AuthProvider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </>
  );
}
