import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { Balance } from "./components/Balance";
import { TransactionList } from "./components/transactions/TransactionList";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { ExpenseChart } from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-2/6 gap-x-2">
          <div className=" bg-zinc-800 p-10 rounded-lg flex">
            <div>
              <h1 className="text-4xl font-bold">Expense Tracker</h1>
              <Balance />
              <IncomeExpenses />
              <TransactionForm />
            </div>
            <div className="w-full">
              <TransactionList />
              <ExpenseChart />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
