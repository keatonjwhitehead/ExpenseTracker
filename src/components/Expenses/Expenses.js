import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";

function Expenses(props) {


    //Creating an intial state to listen to the year selected from the user from the drop down menu. 
    //Value gets stored in the enteredYear and the function setEnteredYear is called
    const [enteredYear, setEnteredYear] = useState('2022');
    const filterYearSelected = selectedYear => {
      setEnteredYear(selectedYear);
      console.log(selectedYear);
    }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={enteredYear} onUpdatedYear = {filterYearSelected} />
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
      <ExpenseItem
        title={props.items[4].title}
        amount={props.items[4].amount}
        date={props.items[4].date}
      />
      <ExpenseItem
        title={props.items[5].title}
        amount={props.items[5].amount}
        date={props.items[5].date}
      />
       <ExpenseItem
        title={props.items[6].title}
        amount={props.items[6].amount}
        date={props.items[6].date}
      />
      <ExpenseItem
        title={props.items[7].title}
        amount={props.items[7].amount}
        date={props.items[7].date}
      />
    </Card>
  );
}
export default Expenses;
