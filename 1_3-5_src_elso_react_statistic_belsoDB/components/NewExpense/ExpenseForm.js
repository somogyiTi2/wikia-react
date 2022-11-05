import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    // const [enterTitle, setEnteredTitle] = useState(''); //Lecserélve:  useState({....
    // const [enterAmount, setEnterAmount] = useState(''); // Lecserélve:  useState({....
    // const [enterDate, setEnterDate] = useState(''); // Lecserélve:  useState({....
    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // });
    // // // MAGYARÁZÓ:
    // // /*a Statbe használhat egy objektumot amit a késöbbiek során úgy töltünk meg 
    // // const a fügvény neve = (event//azaz esemény fügvény) => {
    // //  A SET-es verziója a fentebb felsorolt értékeknek({...fent megadott tömb első értéke,
    // //  érték amit változtatni szeretnénk: bemenő paraméterek })}*/

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    // const titleChangeHendler = (event) => {
    //     //console.log("Title írva van");
    //     //console.log(event.target.value);/*event =esemény fügvény*/
    //     setEnteredTitle(event.target.value);
    //     /*a vanilia JS -ben azaz a klasszikus JS-ben :
    //     document.getElementById('').addEventListener('click',(event)=>{})*/
    //     // setUserInput({ /*kihuzza az összes kulcsértéket és hozzá adja a setUserInput-hoz.*/
    //     //     ...userInput,
    //     //     enterTitle: event.target.value,

    //     // })

    //     /*bizotnságosabb módszer mert a React generálja ki a változot: */
    //     // setUserInput((prevState)=>{
    //     //         return {...prevState, enterState: event.target.value }
    //     // })/*elöző állapotképet bemenő érték, visszadott érték operátor bemenő érték és a megcélgozott esemény fügvény adata*/

    // };

    // const amountChangeHendler = (event) => {
    //     setUserInput({ 
    //     ...userInput,
    //     enterAmount: event.target.value,
    // })}

    // const dateChangeHendler = (event) => {
    //     setUserInput({ 
    // ...userInput,
    // enterDate: event.target.value,
    // })}

    const [enterAmount, setEnterAmount] = useState(''); // FENTEBB ODATETTEM HOGY ÁTLÁTHATÓ LEGYEN 

    const amountChangeHendler = (event) => {
        setEnterAmount(event.target.value);
        // console.log(event.target.value);
    }

    const [enterDate, setEnterDate] = useState('');// FENTEBB ODATETTEM HOGY ÁTLÁTHATÓ LEGYEN 

    const dateChangeHendler = (event) => {
        setEnterDate(event.target.value);
        //  console.log(event.target.value);

    }

    const submitHandler = (event) => {
        event.preventDefault();/*megtartja az állapotot*/
        /*A preventDefault() metódus törli az eseményt, ha az megszakítható, vagyis az eseményhez tartozó alapértelmezett művelet nem történik meg.*/

        const expenseData = {
            title: enteredTitle,
            amount: +enterAmount,
            date: new Date(enterDate),
            // title: enteredTitle,
            // amount: enterAmount,
            // date: new Date(enterDate)
        };

        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);/*ez eggyel fejjebb van 
       a NewExpense.js/<ExpenseForm onSaveExpenseData={onSaveExpenseDataHendler}/> 
       így és így tud kommunikálni 
       a szülő a gyerekével.*/
        setEnteredTitle('');
        setEnterAmount('');
        setEnterDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type='text'
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enterAmount} min="0.01" onChange={amountChangeHendler} /*min mennyi a minimum*/ step="0.01"/*atuómata érték*/ />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enterDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHendler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button typer='button' onClick={props.startEditingHendler}>Cancel</button>
            <button type="submit">Add Expense</button>

        </div>
    </form>

}

export default ExpenseForm