import React from 'react';

// React.createContext returns an object that contains components
const AuthContext = React.createContext({
  isLoggedIn: false
});

// You need to provide it and consume it (listeng to it)
export default AuthContext;
