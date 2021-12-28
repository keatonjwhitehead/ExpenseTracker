import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import DownloadData from './components/DownloadData';

const storeDate = new Date();
const DUMMY_EXPENSES = [
  {
    
    id: "e1",
    title: "",
    details: "",
    date: storeDate,
    description: "",
    amount: "",
    type: "",
    balance: "",
    checkNum: ""
  }
];

const App = () => {

  // handle file upload
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  let count = 0;
  const addExpenseUploadHandler = (expenses) => {
    // setExpenses((prevExpenses) => {
      // return [expenses, ...prevExpenses];
      
    // }
    console.log("Need to load!" );
    expenses.forEach((expense) => {
      const newExpense = {
        id: count,
        title: expense.description + "...",
        details: expense.details,
        date: expense.date,
        description: expense.description,
        amount: expense.amount,
        type: expense.type,
        balance: expense.balance,
        checkNum: expense.checkNum
        
      }
      addExpenseHandler(newExpense);
      count++;
      console.log("adding...")
    })
    console.log("Finish Loading!" );
    
  };



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} onExpenseUpload={addExpenseUploadHandler}/>
      <Expenses items={expenses} />
      <DownloadData />
      
      
    </div>
  );
};

export default App;
