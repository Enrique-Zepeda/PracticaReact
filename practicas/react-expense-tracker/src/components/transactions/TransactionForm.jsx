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
      amount: +amount,
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
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <input
          type="number"
          step="0.01"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ingresa un monto"
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <button className="bg-indigo-700 text-white px-3 py-2 block rounded-lg mb-2 w-full">
          Añade una transaccion
        </button>
      </form>
    </>
  );
};
