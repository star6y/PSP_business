import React, { createContext, useState, useContext } from 'react'

const Auth = createContext()

export const useAuth = () => useContext(Auth);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const login = (username, password) => {
    
    // set up login logic here
    setUser({ username })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <Auth.Provider value={{ user, login, logout}}>
      { children }
    </Auth.Provider>
  )
}
