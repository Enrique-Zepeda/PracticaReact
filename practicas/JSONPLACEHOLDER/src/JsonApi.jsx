import React, { useEffect, useState } from "react";
import axios from "axios";

export const JsonApi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error, "Ha ocurrido un error");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Usuarios</h1>
      <div>
        {users.map((users) => (
          <div key={users.id}>
            <p>Name:{users.name}</p>
            <p>Username:{users.username}</p>
            <p>Email:{users.email}</p>
            <p>Street:{users.address.street}</p>
            <p>Suite:{users.address.suite}</p>
            <p>City:{users.address.city}</p>
            <p>Zipcode:{users.address.zipcode}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};
