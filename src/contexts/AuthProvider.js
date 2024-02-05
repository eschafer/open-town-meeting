import React, { useEffect } from 'react';

// Create a context with an empty default value
export const AuthContext = React.createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [authData, setAuthData] = React.useState(null);

  // get the id token and other auth data from the server on initial load
  useEffect(() => {
    const abortController = new AbortController();

    const checkAuthStatus = async () => {
      try {
        const response = await fetch('/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
          signal: abortController.signal,
        });

        if (response.ok) {
          const data = await response.json();
        } else {
          console.error(
            'Authentication error:',
            response.status,
            response.statusText,
            response,
          );
        }
      } catch (error) {
        if (error.name === 'AbortError') {
        } else {
          console.error('Failed to check auth status', error);
        }
      }
    };
    checkAuthStatus();

    // Cleanup function to cancel the fetch request when the
    // component is unmounted
    return () => {
      abortController.abort();
    };
  }, []);

  // The value passed to AuthContext.Provider should include
  // anything that you want to be accessible to components that
  // consume this context.
  const value = { authData, setAuthData };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
