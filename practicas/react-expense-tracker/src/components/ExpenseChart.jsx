import { VictoryPie, VictoryLabel } from "victory";

export const ExpenseChart = () => {
  return (
    <VictoryPie
      data={[{ x: "cats, y:35" }, { x: "cat, y:45" }, { x: "cas, y:55" }]}
    />
  );
};
