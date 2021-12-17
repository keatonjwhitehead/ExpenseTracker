import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Google G Suite",
      amount: 54.0,
      date: new Date(2021, 11, 2),
    },
    {
      id: "e2",
      title: "Google Voice",
      amount: 14.79,
      date: new Date(2021, 11, 2),
    },
    {
      id: "e3",
      title: "QuickBooks",
      amount: 33.0,
      date: new Date(2021, 11, 16),
    },
    {
      id: "e4",
      title: "Pinnacol Assurance",
      amount: 500.0,
      date: new Date(2021, 11, 1),
    },
    {
      id: "e5",
      title: "Namecheap",
      amount: 9.66,
      date: new Date(2021, 11, 7),
    },
    {
      id: "e6",
      title: "Next Insurance",
      amount: 121.25,
      date: new Date(2021, 11, 29),
    },
    {
      id: "e7",
      title: "Capital One CC",
      amount: 100.0,
      date: new Date(2021, 11, 14),
    },
    {
      id: "e8",
      title: "Genesis CC",
      amount: 100.0,
      date: new Date(2021, 11, 15),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }
  const updateExpenseHandler = expense => {
    console.log('updated expenses');
    console.log(expense);
  }
  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}  />
    </div>
  );
}

export default App;
