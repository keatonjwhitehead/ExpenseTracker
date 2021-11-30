import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import DisplayExpense from "./components/Expenses/DisplayExpense";

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
  return (
    <div>
      <h2>Let's get started</h2>
      <p>This is also visible!</p>
      <DisplayExpense items={expenses}  />
      
    </div>
  );
}

export default App;
