import React from 'react';

// Create a context with an empty default value
export const AuthContext = React.createContext();

// Create a provider component
export function AuthProvider({ children }) {
  const [idToken, setIdToken] = React.useState(null);

  // The value passed to AuthContext.Provider should include
  // anything that you want to be accessible to components that
  // consume this context.
  const value = { idToken, setIdToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
