import { useGlobalState } from "../../context/GlobalState";

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <>
      {transactions.map((transaction) => (
        <div key={transactions.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
          <button onClick={() => deleteTransaction(transaction.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};
