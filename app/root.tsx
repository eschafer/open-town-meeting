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
import { Box, GlobalStyles } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { Menu as MenuIcon } from '@mui/icons-material';
import { AuthProvider } from './auth';

const FONTS = {
  INTER: {
    FAMILY:
      '"Inter",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  MERRIWEATHER: {
    FAMILY:
      '"Merriweather", "Georgia", "Cambria", "Times New Roman", "Times", serif',
  },
};

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
      fontFamily: FONTS.MERRIWEATHER.FAMILY,
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: FONTS.MERRIWEATHER.FAMILY,
      fontSize: '1.71rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: FONTS.MERRIWEATHER.FAMILY,
      fontSize: '1.22rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: FONTS.MERRIWEATHER.FAMILY,
      fontSize: '.98rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: FONTS.INTER.FAMILY,
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
    body1: {
      fontFamily: FONTS.INTER.FAMILY,
      fontSize: '1.22rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: FONTS.INTER.FAMILY,
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
      fontFamily: FONTS.INTER.FAMILY,
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    overline: {
      fontFamily: FONTS.INTER.FAMILY,
      fontSize: '0.88rem',
      fontWeight: 400,
      lineHeight: 1.5,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
    },
    fontFamily: FONTS.INTER.FAMILY,
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
              <CssBaseline />
              <GlobalStyles
                styles={`
                  :root {
                    font-family: ${FONTS.INTER.FAMILY};
                    font-feature-settings: 'ss02' 1, 'ss03' 1, 'liga' 1, 'calt' 1; /* liga & calt are fix for Chrome */
                  }
                  .skip-link {
                    clip: rect(0 0 0 0);
                    border: 0;
                    height: 1px;
                    margin: -1px;
                    overflow: hidden;
                    padding: 0;
                    position: absolute;
                    white-space: nowrap;
                    width: 1px;
                  }
                  .skip-link:focus {
                    clip: auto;
                    height: auto;
                    width: auto;
                    background-color: #ffffff;
                    padding: 1rem;
                    z-index: 1000;
                  }
                `}
              />
              <Box display="flex" flexDirection="column" minHeight="100vh">
                <AppBar
                  position="static"
                  elevation={2}
                  sx={{ backgroundColor: '#ffffff' }}
                >
                  <a href="#main-content" className="skip-link">
                    Skip to main content
                  </a>
                  <Toolbar
                    sx={{
                      // backgroundColor: '#000000',
                      // color: '#ffffff',
                      textDecoration: 'none',
                    }}
                  >
                    {/*<IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2 }}
                        >
                          <MenuIcon />
                        </IconButton>*/}
                    <Typography
                      variant="h2"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      <Link
                        to="/"
                        style={{ color: '#000000', textDecoration: 'none' }}
                      >
                        Open Town Meeting
                      </Link>
                    </Typography>
                    <Button color="inherit">Login</Button>
                  </Toolbar>
                  <Toolbar
                    component="nav"
                    aria-label="Primary navigation"
                    sx={{ minHeight: 'auto !important' }}
                  >
                    <Stack
                      component="ul"
                      direction="row"
                      spacing={4}
                      alignItems="center"
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        margin: '0 -1rem',
                        padding: 0,
                      }}
                    >
                      {navLinks.map((link) => (
                        <Box
                          component="li"
                          key={link.to}
                          sx={{
                            display: 'inline-block',
                          }}
                        >
                          <MuiLink
                            component={NavLink}
                            to={link.to}
                            underline="none"
                            display="inline-block"
                            sx={{
                              position: 'relative',
                              padding: '1rem',

                              '&.active::after': {
                                backgroundColor: '#2672de',
                                borderRadius: '0',
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                height: '.25rem',
                                left: '1rem',
                                right: '1rem',
                                bottom: '0',
                              },
                            }}
                          >
                            <Typography
                              variant="button"
                              component="div"
                              sx={{ whiteSpace: 'nowrap' }}
                            >
                              {link.label}
                            </Typography>
                          </MuiLink>
                        </Box>
                      ))}
                    </Stack>
                  </Toolbar>
                </AppBar>
                <Box
                  component="main"
                  id="main-content"
                  flexGrow={1}
                  sx={{ padding: '3rem 1.5rem' }}
                >
                  <Outlet />
                </Box>
                <Box component="footer">
                  <Box component="ul">
                    <Box component="li">
                      <a href="mailto:info@opentownmeeting.org">
                        info@opentownmeeting.org
                      </a>
                    </Box>
                    <Box component="li">
                      <Link to="/accessibility">Accessibility</Link>
                    </Box>
                    <Box component="li">
                      <Link to="/privacy">Privacy Policy</Link>
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
