import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { LinksFunction } from '@remix-run/cloudflare';
import { cssBundleHref } from '@remix-run/css-bundle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { AuthProvider } from '~/contexts/AuthProvider';
import MainContent from '~/components/MainContent';

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
    // fontFamily: FONTS.INTER.FAMILY,
    // fontSize: 16,
  },
});

export default function App() {
  /*useEffect(() => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyB_advhmPGSFw5j1YBsprIVt_oHa4e7Nrc',
      authDomain: 'open-town-meeting.firebaseapp.com',
      databaseURL: 'https://open-town-meeting-default-rtdb.firebaseio.com',
      projectId: 'open-town-meeting',
      storageBucket: 'open-town-meeting.appspot.com',
      messagingSenderId: '72845727988',
      appId: '1:72845727988:web:49882b0f0a178dcd15a6a1',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('user is signed in', user);
        // https://firebase.google.com/docs/reference/js/auth.user
      } else {
        console.log('user is signed out');
      }
    });

    // Initialize Realtime Database and get a reference to the service
    const db = getDatabase(app);

    const dataRef = ref(db, 'data');

    const listener = (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    };

    onValue(dataRef, listener);

    return () => {
      // Cleanup
      off(dataRef, listener);
    };
  }, []);*/

  // const GOOGLE_CLIENT_ID =
  //  '72845727988-iquthaap2ui57ttr9rfefuvu5imlank3.apps.googleusercontent.com';

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
