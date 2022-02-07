import React , {useState} from 'react';
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";
import ExpensesFilter from './ExpenseFilter';
import "./Expenses.css";
import ExpensesChart from './ExpensesChart';
 function Expenses(props) {
  const [dateFilter , setDateFilter] = useState('2021'); // Array destructuring , feature of javascript. 
  const filterChangeHandler = selectedYear =>{
  setDateFilter(selectedYear);
  console.log(dateFilter);
   }

   const filteredExpenses = props.items.filter(expense =>{ // filter function, returns a new array
        return expense.date.getFullYear().toString() === dateFilter; 
    }) // return on a condition

    
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected = {dateFilter} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses = {filteredExpenses} />
        <ExpensesList items = {filteredExpenses} /> 
      </Card>
    </div>
  );
}

export default Expenses;
