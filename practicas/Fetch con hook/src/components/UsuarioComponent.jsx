import { UseFetch } from "../hooks/UseFetch";

export const UsuarioComponent = () => {
  const { data, isLoading, errors } = UseFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <h1>Lista de Usuarios</h1>
      {isLoading ? (
        <h4>Cargando...</h4>
      ) : errors ? (
        <p>A ocurrido un error: {errors}</p>
      ) : (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
