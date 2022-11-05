import React from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
    const onSaveExpenseDataHendler = (enterExpenseData) =>{

        const expenseData ={
            ...enterExpenseData, /*... Operátor egybe lehet fűzni vele a karakterláncokat*/
            id: Math.random().toString()
        };

       // console.log(expenseData);
       props.onAddExpense(expenseData);/*az elözőben átadott objektumot propsként tovább adjuk a onAddExpense fügvénynek eggyel fejjebb*/
       SetIsEditing(false)
    };


   
    let addExpenseForm = <ExpenseForm onSaveExpenseData={onSaveExpenseDataHendler}
    />
    
    const [isEditing, SetIsEditing]= useState(false)

    const startEditingHendler = () =>{
        SetIsEditing(!isEditing)
    }

    
    

    return <div className="new-expense">
       {isEditing == false ? <button onClick={startEditingHendler}>Add New Expense </button> : addExpenseForm}
    </div>

};

export default NewExpense;