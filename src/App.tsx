import { useContext } from 'react';
import { FirebaseProvider } from './contexts/FirebaseContext';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import LoginForm from './components/LoginForm';
import MainApp from './components/MainApp';
import './App.css';

const App = () => {
  const authContext = useContext(AuthContext);

  if (authContext?.loading) {
    return <div>Loading...</div>;
  }

  return <>{authContext?.currentUser ? <MainApp /> : <LoginForm />}</>;
};

function RootApp() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default RootApp;
