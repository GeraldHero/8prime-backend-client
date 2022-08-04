import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const PrivateRoute = () => {
  var auth = JSON.parse(localStorage.getItem('userInfo'));
  // This will allow to check if localStorage has user token if not it will redirect to login page.
  // Outlet - If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
  return auth?.token ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
