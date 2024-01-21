import { useState, useEffect } from 'react'
import { UserList } from './components/userList'

export const UserApp = () => {

  const [endPoint, setEndPoint] = useState('users')

  const handleFetch = () => {
    setEndPoint('comments')
  }

  return (
    <>
    <h1>Lista de usuarios:</h1>
    <UserList endPoint={endPoint}></UserList>
    <button onClick={handleFetch}>Mostrar Usuarios(llama a la api)</button>
  
    </>
  )
}

