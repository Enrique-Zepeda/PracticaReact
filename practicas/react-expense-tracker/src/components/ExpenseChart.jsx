import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";
export const ExpenseChart = () => {
  const { transactions } = useGlobalState();
  const total = transactions.reduce(
    (acc, transaction) => (acc = +transaction.amount),
    0
  );
  console.log("totaleichon", total);

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc = +transaction.amount), 0);

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc = +transaction.amount), 0) * -1;

  const totalExpensePercentage = Math.round((totalExpense / totalIncome) * 100);
  console.log(totalExpensePercentage);

  const totalIncomePercentage = 100 - totalExpensePercentage;

  console.log("gastos", totalIncome);
  console.log("gastos", totalExpense);

  return (
    <>
      <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        animate={{
          duration: 200,
        }}
        data={[
          { x: "Expenses", y: totalExpense },
          { x: "Incomes", y: totalIncome },
        ]}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
      />
    </>
  );
};
