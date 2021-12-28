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
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

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
        <Dropzone onExpenseUpload_2={passUploader} />
        </div>
      )}
    </div>
  );
};

export default NewExpense;