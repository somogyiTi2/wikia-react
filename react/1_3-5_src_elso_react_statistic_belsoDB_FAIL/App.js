// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ExpenseItem from './components/Expenses/Expenseltem'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

/*function App() {*/ const App = () => { /*ez csak egy szintaxtis fajta ugyan azt jelenti*/

const [expenses, setExpenses] = useState(DUMMY_EXPENSES); /*useState(bemenő érték)*/

const addExpenseHandler= expense => {
  console.log('in App');
  console.log(expense);
    //   // setExoenses([expenses, ...expenses])
   setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
      });
}

  //return React.crateElelment(
  //  'div',
  //  {},
  //  React.crateElelment('h2',{},"Argoment típus beállítása és kontent"),
  // React.crateElelment(Expenses, { items: expenses } )
  //); //valami hiba van itt
  //első egy div a második egy beállítás az első objektumra}

  return (
    <div>
      <h2 > Let 's get started</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
