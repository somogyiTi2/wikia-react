import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import  ExpensesList  from './ExpensesList';
import  ExpensesChart  from './ExpensesChart';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {return expense.date.getFullYear().toString() === filteredYear;
  })

  /*let expenses = <p>No expense found.</p>
  
  if(filteredExpenses.length > 0){
    expenses =  <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
  }*/
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList filteredExpenses={filteredExpenses}/>
        {/*{expenses}*/
        }{
          /*filteredExpenses.length === 0 && <p>No expense found.</p>
         filteredExpenses.length > 0 &&  filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />*/}
        {/*filteredExpenses.length === 0 ? <p>No expense found.</p>: 
        /*props.items* /filteredExpenses.map((expense /*index ha nincs id* /) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))*/}
       
        {/* <ExpenseItem
   title = {props.items[0].title}//expenses[0].title}
     amount = {props.items[0].amount}//expenses[0].amount}
     date = {props.items[0].date}
//expenses[0].date
    > </ExpenseItem>
    <ExpenseItem
    title ={props.items[1].title}//expenses[1].title
   amount = {props.items[1].amount}//expenses[1].amount
   date = {props.items[1].date}//akkor kell átnevezni itemsre ha új osztályba teszem
//expenses[1].date
    > </ExpenseItem>
   <ExpenseItem
    title ={props.items[2].title}//expenses[2].title}
   amount = {props.items[2].amount}//expenses[2].amount}
   date = {props.items[2].date}//expenses[2].date}
   />
   <ExpenseItem
    title ={props.items[3].title}//expenses[2].title}
   amount = {props.items[3].amount}//expenses[2].amount}
   date = {props.items[3].date}//expenses[2].date}
   /> */}
      </Card>
    </div>
  );
};

export default Expenses;
//export default ExpenseItem;//a füvgény alapértelmezését vissza adjuk

