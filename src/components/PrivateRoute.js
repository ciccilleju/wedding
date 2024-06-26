// PrivateRoute.js
import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children, roles }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a proper loading component or spinner
  }


  if (!user || (roles && !roles.includes(user.role))) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
