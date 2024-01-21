import { useState, useEffect } from 'react'

export const UserApp = () => {

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data)
      setUsers(data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
    <h1>Lista de usuarios:</h1>
    <ul>
      {users.map(user => <li key={user.id}>Nombre:{user.name}, Email:{user.email}</li>)}
    </ul>

    </>
  )
}

