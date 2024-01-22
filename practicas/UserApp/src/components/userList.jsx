import { useFetchData } from "../hooks/useFetchData"

export const UserList = ({endPoint}) => {

  const {data, isLoading} = useFetchData(endPoint)

  return (
    <>
    <ul>
        {isLoading 
          ? <p>Cargando...</p> 
          : endPoint == 'users' 
          ? data.map(user => <li key={user.id}>Nombre:{user.name}, Email:{user.email}</li>)
          : data.map(user => <li key={user.id}>Nombre:{user.name}, Body:{user.body}</li>)
        }
    </ul>
    </>

  )
}
