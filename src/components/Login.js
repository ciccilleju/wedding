import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
/* import { useTranslation } from 'react-i18next'; */
import Button from './Button';
import ErrorDialog from './UI/ErrorDialog';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  /* const { t } = useTranslation(); */
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      window.location.href = '/';
    } catch (error) {
      setErrorMessage(error.response.data);
      console.error('Failed to login', error);
    }
  };

  const closeDialog = async () => {
    setErrorMessage('');
  };


  return (
    <section>
      <h2 className="text-3xl font-bold underline">Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="primary" > Invia </Button>

        {errorMessage !== '' && <ErrorDialog errorMessage={errorMessage} closeDialog={closeDialog} />}
      </form>
    </section>
  );
};

export default Login;
