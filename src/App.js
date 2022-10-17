import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/newExpense";
import React, { useState } from "react";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurances",
    amount: 170.8,
    date: new Date(2022, 2, 27),
  },
  {
    id: "e2",
    title: "New Phone",
    amount: 330,
    date: new Date(2021, 3, 22),
  },
  {
    id: "e3",
    title: "New Laptop",
    amount: 450.5,
    date: new Date(2020, 9, 15),
  },
];


const App = () => {
    const [ expenses, setExpenses ] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
      setExpenses( prevExpense => {
        return [  expense, ...prevExpense];
      });
    };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
