import { Children, useContext } from "react"
import { UserContext } from "../context/UserContext"

export const HomeScreen = () => {

  const { usuario } = useContext( UserContext )

  return (
    <>
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Tecnologia</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{usuario.nombre}</td>
      <td>{usuario.tecnologia}</td>
      <td>{usuario.email}</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

