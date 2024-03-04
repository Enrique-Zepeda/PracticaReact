import React, { useEffect, useState } from "react";

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
      <h1>Usuarios</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>Nombre:{user.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
