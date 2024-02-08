import type { LinksFunction } from "@remix-run/cloudflare";

import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { AuthProvider } from "./auth";
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
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
        '"Merriweather Web", "Georgia", "Cambria", "Times New Roman", "Times", serif ',
    },
    h2: {
      fontFamily:
        '"Merriweather Web", "Georgia", "Cambria", "Times New Roman", "Times", serif ',
    },
    h3: {
      fontFamily:
        '"Merriweather Web", "Georgia", "Cambria", "Times New Roman", "Times", serif ',
    },
    h4: {
      fontFamily:
        '"Merriweather Web", "Georgia", "Cambria", "Times New Roman", "Times", serif ',
    },
    h5: {
      fontFamily:
        '"Merriweather Web", "Georgia", "Cambria", "Times New Roman", "Times", serif ',
    },
    h6: {
      fontFamily:
        '"Merriweather Web", "Georgia", "Cambria", "Times New Roman", "Times", serif ',
    },
    fontFamily: '"Inter","Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
  },
});

export default function App() {
  const navLinks = [
    { to: "/warrant-articles", label: "Warrant Articles" },
    { to: "/budget", label: "Budget" },
    { to: "/town-meeting-members", label: "Town Meeting Members" },
    { to: "/meetings", label: "Meetings" },
    { to: "/committees", label: "Committees" },
  ]
  return (
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
            <ul>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Outlet />
          </ThemeProvider>
        </AuthProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
