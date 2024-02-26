import { createContext, useContext, useEffect, useState } from 'react';
import {
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const AuthContext = createContext(null);

export function AuthProvider({ children, firebaseConfig }) {
  const [user, setUser] = useState(null);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (newUser) => {
      setUser(newUser);

      if (newUser) {
        const token = await getIdToken(newUser);

        await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });
      } else {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
    });

    // return a cleanup function to unsubscribe from the listener
    return unsubscribe;
  }, [auth]);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// create a hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}
