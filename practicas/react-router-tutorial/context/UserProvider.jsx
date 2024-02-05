import React, { useState } from 'react'
import { UserContext } from './UserContext'



export const UserProvider = ({children}) => {

  const [usuario, setUsuario] = useState({})

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
        {children}
    </UserContext.Provider>
  )
}
