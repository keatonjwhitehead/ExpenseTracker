import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import DownloadData from './components/DownloadData';

const storeDate = new Date();

const DUMMY_EXPENSES = [
  {
    
    id: "example",
    title: "Download the dataset below to see it propergated here!",
    details: "",
    date: storeDate,
    description: "",
    amount: 0,
    type: "",
    balance: "",
    checkNum: "",
    key:"example"
  }
];

const App = () => {

  // handle file upload
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const getLoadingDisplay = () => {
    return isLoading;
  }

  const getExpensesHandler =() => {
    return expenses;
  }

  const setLoadingDisplay = (val) => {
    setIsLoading(val);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  const addExpensesHandler = (expensesImport) => {
    setExpenses((prevExpenses) => {
      return [...expensesImport, ...prevExpenses];
    });
  };

  const deleteItemHandler = (expenseId) => {
    setExpenses((prevExpeneses) => {
      const updatedExpense = prevExpeneses.filter((expense) => expense.id !== expenseId);
      return updatedExpense;
    });
  };
  let count = 0;




  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} onAddMultExpenses={addExpensesHandler} onLoad={setLoadingDisplay} onLoadCheck={getLoadingDisplay} onNewExpense={deleteItemHandler}/>
      <Expenses items={expenses} c={getExpensesHandler} />
      <DownloadData  />
      
      
    </div>
  );
};

export default App;
