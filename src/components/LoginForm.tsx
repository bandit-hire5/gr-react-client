import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../contexts/FirebaseContext';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const firebaseContext = useContext(FirebaseContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (firebaseContext) {
      try {
        await signInWithEmailAndPassword(firebaseContext.auth, email, password);
      } catch (error) {
        console.error('Ошибка при входе:', error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '300px',
    margin: 'auto',
  },
};

export default LoginForm;
