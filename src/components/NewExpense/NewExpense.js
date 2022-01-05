import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import Dropzone from "./Dropzone";
import './NewExpense.css';


const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const passUploader = (data) => {
    props.onExpenseUpload(data);
  }
  const passAddExpense = (data) => {
    props.onAddExpense(data);
  }
  const onLoadHandler = (data) => {
    props.onLoad(data);
  }
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const onNewExpenseHanlder = (expenseId) => {
    props.onNewExpense(expenseId);
}

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const onLoadCheckHandler = () => {
    let check = props.onLoadCheck();
    return check;
  };
  const passDataHandler = (data) => {
    props.onAddMultExpenses(data);
  }

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <div>
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
        <Dropzone onAddExpense_2 = {passAddExpense} onAddExpenses={passDataHandler} onLoadPasser={onLoadHandler} onLoadCheck2={onLoadCheckHandler} onRemoveExample={onNewExpenseHanlder}/>
        </div>
      )}
    </div>
  );
};

export default NewExpense;