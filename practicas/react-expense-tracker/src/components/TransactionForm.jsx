import React, { useState } from "react";

export const TransactionForm = () => {
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(description, amount);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ingresa una descripcion"
        />
        <input
          type="number"
          step="0.01"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ingresa un monto"
        />
        <button>Añade una transaccion</button>
      </form>
    </>
  );
};
