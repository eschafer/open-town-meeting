import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { FirebaseError, initializeApp } from 'firebase/app';

import type { FirebaseOptions } from 'firebase/app';
import type { User } from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  signIn: () => Promise<void>; // Replace '() => void' with the actual type of 'signIn'
  signOut: () => Promise<void>; // Replace '() => void' with the actual type of 'signOut'
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: async () => {},
  signOut: async () => {},
});

export function AuthProvider({
  children,
  firebaseConfig,
}: {
  children: ReactNode;
  firebaseConfig: FirebaseOptions;
}) {
  const [user, setUser] = useState<User | null>(null);

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
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error.code, error.message);
      } else {
        console.error(error);
      }
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(error.code, error.message);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// create a hook to use the auth context
export function useAuth(): AuthContextType | null {
  return useContext(AuthContext);
}
