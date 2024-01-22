import { useFetchData } from "../hook/useFetchData"

export const UserList = ({endPoint}) => {

  const {data, isLoading} = useFetchData(endPoint)

  return (
    <>
    <ul>
        {endPoint == 'users' ? data.map(user => <li key={user.id}>Nombre:{user.name}, Email:{user.email}</li>)
            : data.map(user => <li key={user.id}>Nombre:{user.name}, Body:{user.body}</li>)}
    </ul>
    </>

  )
}
