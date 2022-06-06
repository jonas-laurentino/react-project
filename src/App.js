import react, { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "toilet paper",
    amount: 94.14,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "car insurance",
    amount: 294.14,
    date: new Date(2020, 5, 24),
  },
  {
    id: "e3",
    title: "games",
    amount: 99.14,
    date: new Date(2020, 2, 15),
  },
  {
    id: "e4",
    title: "school",
    amount: 59.14,
    date: new Date(2020, 3, 18),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return ([expense, ...prevExpenses]);
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
