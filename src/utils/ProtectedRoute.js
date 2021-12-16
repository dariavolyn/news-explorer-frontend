import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...props  }) => {
  return (
    <Route>
      {
        () => props.isLoggedIn ? <Component {...props} /> : <Redirect to='/' />
      }
    </Route>
)}