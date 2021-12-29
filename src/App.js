import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import DownloadData from './components/DownloadData';

const storeDate = new Date();

const DUMMY_EXPENSES = [
  {
    
    id: "e1",
    title: "Download the dataset below to see it propergated here!",
    details: "",
    date: storeDate,
    description: "",
    amount: 99.99,
    type: "",
    balance: "",
    checkNum: ""
  }
];

const App = () => {

  // handle file upload
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const getLoadingDisplay = () => {

    return isLoading;
  }

  const setLoadingDisplay = (val) => {
    setIsLoading(val);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  let count = 0;




  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} onLoad={setLoadingDisplay} onLoadCheck={getLoadingDisplay}/>
      <Expenses items={expenses} />
      <DownloadData  />
      
      
    </div>
  );
};

export default App;
