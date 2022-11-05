import './ExpneseDate.css';
import React from 'react';

function ExpenseDate(props){
  const month = props.date.toLocaleDateString('hu-HU',{month:'long'});
  const day = props.date.toLocaleDateString('hu-HU',{day:'numeric'});
  const year = props.date.toLocaleDateString('hu-HU',{year:'numeric'});
return(
  <div className="expense-date"> {/*expenseDate*//*props.date.toISOString()*//*ez kell a dátum után*/}
    <div className="expense-date__month">{month/*props.date.toLocaleDateString('hu-HU',{month:'long'})/*ezzel lehet hónapot kiírni*/}</div>
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day">{day}</div>
    </div>);
  };

export default ExpenseDate;
