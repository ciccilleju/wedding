import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import validateToken from './Validate';
import { useTranslation } from 'react-i18next';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const { i18n } = useTranslation();


  const [user, setUser] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('guest');
  const [loading, setLoading] = useState(true);

  const login = async (username, password) => {
    const response = await axios.post('/api/auth/login', { username, password });
    console.log(response)
    setUser(response.data);
    localStorage.setItem('token', response.data.token);
    setIsUserLoggedIn(true);
    setLoading(false);
    setUserRole(response.data.role);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    setIsUserLoggedIn(false);
    setLoading(false);
  };

  useEffect(() => {

    const checkTokenValidity = async () => {
      const result = await validateToken();
      if (result.valid) {
        setUser(result.user);
        setIsUserLoggedIn(true);
        setLoading(false);
        setUserRole(result.user.role);
        i18n.changeLanguage(result?.user?.language ?? 'it');
      } else {
        logout();
      }
    };

    checkTokenValidity();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isUserLoggedIn, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
