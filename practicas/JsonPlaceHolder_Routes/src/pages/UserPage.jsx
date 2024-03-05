import { useEffect, useState } from "react";

export const UserPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error(error, "ha ocurrido un error");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="card">
        <h3 className="card-header">Usuario</h3>
        {users.map((user) => (
          <div key={user.id} className="card-header">
            <div className="card-header">
              <h5 className="card-title">Nombre:{user.name}</h5>
              <p className="card-text">Usuario:{user.username}</p>
              <p className="card-text">Email:{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
