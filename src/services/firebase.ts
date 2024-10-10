import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyAlY4i6vS6ELj1mr5ci2Mg0uoLdsiNnAJ0',
  appId: '1:248645049979:web:dc1ea619d5eb6704458cde',
  messagingSenderId: '248645049979',
  projectId: 'gameroom-client-dev',
  authDomain: 'gameroom-client-dev.firebaseapp.com',
  storageBucket: 'gameroom-client-dev.appspot.com',
  measurementId: 'G-NLW3MY69C3',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const functions = getFunctions(app, 'europe-west3');

export { auth, functions };
