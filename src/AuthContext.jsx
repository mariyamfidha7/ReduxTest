import React, { createContext, useState } from 'react'


export const Auth=createContext({
    loggedIn: false,
    setLoggedIn:function setLoggedIn(){},
})

const AuthContext = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Auth.Provider value={{loggedIn, setLoggedIn}}>{children}</Auth.Provider>
  )
}

export default AuthContext
