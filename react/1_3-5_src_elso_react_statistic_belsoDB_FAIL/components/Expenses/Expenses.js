import ExpenseItem from './Expenseltem';
import './Expenses.css';
import Card from '../UI/Card';
import React from 'react';
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020')

  const filterCahngeHandler = (selectedYear) => {
    console.log('Expenses.js', selectedYear)
    setFilterYear(selectedYear);
  }
  return (<div>
    <Card className="expenses">
      <ExpensesFilter selecterd={filterYear} onChangeFilter={filterCahngeHandler} />
      {props.items.map((expense) =>( 
      <ExpenseItem 
      title={expense.title} 
      amount={expense.amount} 
      date={expense.date} 

      />)
      )}
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
  )
}
export default Expenses;
//export default ExpenseItem;//a füvgény alapértelmezését vissza adjuk
