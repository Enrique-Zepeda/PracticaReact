import React from "react";
import { useGlobalState } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  console.log(income);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  console.log(income);
  return (
    <>
      <div>
        <h1>Income</h1>
        <p>{income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p>{expense}</p>
      </div>
    </>
  );
};
