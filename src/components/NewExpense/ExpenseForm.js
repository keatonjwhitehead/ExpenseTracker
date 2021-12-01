import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        // console.log(event.target.value);
        setUserInput({
            ...userInput, // This copies the previous state of information the other object data is not overwritten
            enteredTitle: event.target.value // this overrides just the previous element that was changed from the new retrieved input
        })
    };
    const amountChangeHandler = (event) => {
        // setEnteredAmount(event.target.value);
        // console.log(event.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        })
    };
    const dateChangeHandler = (event) => {
        // setEnteredDate(event.target.value);
        // console.log(event.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
    };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label> Date</label>
          <input type="date" min="2020-01-01" max="2025-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
