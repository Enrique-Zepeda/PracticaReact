import React, { useState } from "react";

export const DogsAPI = () => {

  const [Buscar, setBuscar] = useState({});

  return (
    <>
      <h1>Dogs API</h1>
      <hr className="border border-primary border-3 opacity-50"/>
      <select
        className="form-select form-select-lg mb-3"
      >
        <option selected>Seleciona Perro</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </>
  );
};
