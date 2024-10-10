import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseContext } from './FirebaseContext';
import { User } from '../interfaces/user';

interface AuthContextProps {
  currentUser: User | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const firebaseContext = useContext(FirebaseContext);

  useEffect(() => {
    if (firebaseContext) {
      const unsubscribe = firebaseContext.auth.onAuthStateChanged(
        (user: User) => {
          setCurrentUser(user);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    }
  }, [firebaseContext]);

  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
