import { useState, useEffect } from 'react'

export const UserList = ({endPoint}) => {

    const [data, setData] = useState([])

    const fetchdata = async () => {
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
        const data = await response.json()
        console.log(data)
        setData(data)
      }catch(error){
        console.log(error)
      }
    }

    useEffect(() => {
        fetchdata()
      }, [endPoint])

  return (
    <>
    <ul>
        {endPoint == 'users' ? data.map(user => <li key={user.id}>Nombre:{user.name}, Email:{user.email}</li>)
            : data.map(user => <li key={user.id}>Nombre:{user.name}, Body:{user.body}</li>)}
    </ul>
    </>

  )
}
