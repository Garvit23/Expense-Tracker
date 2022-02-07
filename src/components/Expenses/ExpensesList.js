import React from 'react' ;

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
    if (props.items.length === 0) {
      return <h2 className='expenses-list__fallback'>No items found.</h2>
    }
    else
    {
     return <ul className = "expenses-list">
           { props.items.map(( expense ) => //map method : creates a new array based on another array
         (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        )
      )};
    </ul>
}}

export default ExpensesList;

