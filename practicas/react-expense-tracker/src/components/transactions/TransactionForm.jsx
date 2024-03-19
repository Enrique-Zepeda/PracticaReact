import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";
export const TransactionForm = () => {
  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount,
    });
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
