import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const onSaveExpenseDataHendler = (enterExpenseData) =>{

        const expenseData ={
            ...enterExpenseData, /*... Operátor egybe lehet fűzni vele a karakterláncokat*/
            id: Math.random().toString()
        };

       // console.log(expenseData);
       props.onAddExpense(expenseData);/*az elözőben átadott objektumot propsként tovább adjuk a onAddExpense fügvénynek eggyel fejjebb*/
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHendler}/>
    </div>

};

export default NewExpense;