import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { json, LinksFunction, LoaderFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { AuthProvider } from '~/contexts/AuthProvider';
import MainContent from '~/components/MainContent';

import type { LoaderFunctionArgs } from '@remix-run/cloudflare';
import type { FirebaseOptions } from 'firebase/app';

interface Env {
  FIREBASE_API_KEY: string;
  FIREBASE_AUTH_DOMAIN: string;
  FIREBASE_DATABASE_URL: string;
  FIREBASE_PROJECT_ID: string;
  FIREBASE_STORAGE_BUCKET: string;
  FIREBASE_MESSAGING_SENDER_ID: string;
  FIREBASE_APP_ID: string;
}

const FONTS = {
  INTER: {
    FAMILY:
      '"Inter",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  FRAUNCES: {
    FAMILY:
      '"Fraunces", "Georgia", "Cambria", "Times New Roman", "Times", serif',
  },
};

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,SOFT,WONK@9..144,100,0..1&display=swap',
  },
  {
    rel: 'preconnect',
    href: 'https://rsms.me/',
  },
  {
    rel: 'stylesheet',
    href: 'https://rsms.me/inter/inter.css',
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
      default: '#f5f7fa',
    },
  },
  typography: {
    h1: {
      fontFamily: FONTS.FRAUNCES.FAMILY,
      fontSize: '2.5rem',
      fontOpticalSizing: 'auto',
      fontWeight: 400,
      fontStyle: 'normal',
      fontVariationSettings: `"SOFT" 100, "WONK" 0`,
      letterSpacing: '-0.0625rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: FONTS.FRAUNCES.FAMILY,
      fontSize: '1.71rem',
      fontOpticalSizing: 'auto',
      fontWeight: 400,
      fontStyle: 'normal',
      fontVariationSettings: `"SOFT" 100, "WONK" 0`,
      letterSpacing: '-0.0625rem',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: FONTS.FRAUNCES.FAMILY,
      fontSize: '1.22rem',
      fontOpticalSizing: 'auto',
      fontWeight: 400,
      fontStyle: 'normal',
      fontVariationSettings: `"SOFT" 100, "WONK" 0`,
      letterSpacing: '-0.0625rem',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: FONTS.FRAUNCES.FAMILY,
      fontSize: '.98rem',
      fontOpticalSizing: 'auto',
      fontWeight: 400,
      fontStyle: 'normal',
      fontVariationSettings: `"SOFT" 100, "WONK" 0`,
      letterSpacing: '-0.0625rem',
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
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: FONTS.INTER.FAMILY,
      fontSize: '1rem',
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
    // fontFamily: FONTS.INTER.FAMILY,
    // fontSize: 16,
  },
});

export const loader: LoaderFunction = async (args: LoaderFunctionArgs) => {
  const context = args.context as typeof args.context & { env: Env };

  // Google says it's okay to expose the Firebase config in the client
  const firebaseOptions: FirebaseOptions = {
    apiKey: context.env.FIREBASE_API_KEY,
    authDomain: context.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: context.env.FIREBASE_DATABASE_URL,
    projectId: context.env.FIREBASE_PROJECT_ID,
    storageBucket: context.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: context.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: context.env.FIREBASE_APP_ID,
  };

  return json(firebaseOptions);
};

export default function App() {
  const firebaseOptions = useLoaderData<FirebaseOptions>();

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
          <AuthProvider firebaseOptions={firebaseOptions}>
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
              <MainContent />
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
