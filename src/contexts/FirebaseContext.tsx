import { createContext, ReactNode } from 'react';
import { auth, functions } from '../services/firebase';
import { Auth } from 'firebase/auth';
import { Functions } from 'firebase/functions';

interface FirebaseContextProps {
  auth: Auth;
  functions: Functions;
}

export const FirebaseContext = createContext<FirebaseContextProps | null>(null);

interface FirebaseProviderProps {
  children: ReactNode;
}

export const FirebaseProvider = ({ children }: FirebaseProviderProps) => {
  return (
    <FirebaseContext.Provider value={{ auth, functions }}>
      {children}
    </FirebaseContext.Provider>
  );
};
