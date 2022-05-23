import React, { createContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { fetchUserProfile } from '../utils/fetchUtils';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // const history = useHistory()
  // const location = useLocation()
  // const { from } = location.state || { from: { pathname: '/' } };
  // const [user, setUser] = useState(null);
  // set to null or take advatnage of local storage
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));





  const login = () => {
    console.log('I am hit');
  }


  // const login = (email, password) => {
  //   // will replace with supabase model
  //   const loginWithSuccess = email === 'jow@jo.com' && password === '123456';
  //   if (loginWithSuccess) {
  //     setUser({ email });
  //     console.log('we are live');
  //   }
  //   return loginWithSuccess;
  // };



  function logout(callback) {
    // will fill out with supbase data model
    setUser(null);
    callback();
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
