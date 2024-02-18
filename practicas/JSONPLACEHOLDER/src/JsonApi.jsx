import React, { useEffect, useState } from "react";

export const JsonApi = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    const response = fetch("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <>
      <h1>Usuarios</h1>;
    </>
  );
};
