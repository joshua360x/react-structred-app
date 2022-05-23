import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom';



export const AuthContext = createContext()



export function AuthProvider({children}) {
  const history = useHistory()
  const [user, setUser] = useState(null);
  const login = (email, password) => {
    // will replace with supabase model
    const loginWithSuccess = email === 'jow@jo.com' && password === '123456'
    if (loginWithSuccess) {
      setUser({email})
      history.replace('/post')
    }
    return loginWithSuccess
  }

  function logout(callback) {
    // will fill out with supbase data model
    setUser(null)
    callback()
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
