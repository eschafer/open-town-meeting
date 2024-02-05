import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

export function Component() {
  const { setAuthData } = useContext(AuthContext);

  // Add/remove the Google Sign-In script to the DOM
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Add/remove a callback when the Google Sign-In button is clicked
  useEffect(() => {
    window.handleCredentialResponse = async (credential) => {
      await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: credential,
        }),
      }).then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          setAuthData(data);
        } else {
          console.error(
            'Auth.js Error:',
            response.status,
            response.statusText,
            response,
          );
        }
      });
    };

    // Clean up the function when the component is unmounted
    return () => {
      delete window.handleCredentialResponse;
    };
  }, [setAuthData]);

  const GOOGLE_CLIENT_ID =
    '72845727988-iquthaap2ui57ttr9rfefuvu5imlank3.apps.googleusercontent.com';

  return (
    <>
      <h1>Authentication testing</h1>
      <div
        id="g_id_onload"
        data-client_id={GOOGLE_CLIENT_ID}
        data-callback="handleCredentialResponse"
        data-auto_prompt="false"
      ></div>
      <div
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      ></div>
    </>
  );
}

Component.displayName = 'Auth';
