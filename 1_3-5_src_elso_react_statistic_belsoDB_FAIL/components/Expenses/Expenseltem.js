import React, { useState } from 'react'; /*a Reactot alapból behúzom, de ehhez még itt hozzá kell adni , {useState}*/

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';


function Expenseltem (props) {/*a bemenő adatoknak baármilyen tömbnevet adhatok (most props)*/
  /*const expenseDate= new Date(2021, 12, 30); /*FONTOS, HOGY A HÓNAPOK 0-TÓL KEZDŐDNEK*/
  /*const expenseTitle = 'Kicsi kocsi';
  const expnsAmount = 297.56;
*/
const [title, setTitle] = useState(props.title); 
/*fontos. hogy a fügvényen belül hívjuk meg a Statet (HUCK HOROG)*/
/*setTitle = frissítési funkciót */
/*title = maga a változó bemenő értéke */
/*A titel felveszi a változót a SetTitle alábélyegez 
és a title tartja addig az állapotát amíg nincs újra meghívva a fügvény*/

console.log('Pédányonként egyszer hívódik meg (most 4x mert 4 ellem van) és aztán újra indul ha kattintunk.');


//let title= props.title;/*ezzel meg tudjuk határozni, hogy melyik titlet nyomjuk be */

  const clickHandler = () => {
    setTitle("Updated");
    /*a léynege, hogy nem csak új értéket kap hanem, 
    hogy a komponens fügvény amit meghív
    állapot frissítés funkció*/
    /*title = "Update";*/
    console.log ( title ) ;}
    /*így is meg lehet hívni a fügvényt a buttonél
  LENTEBB:<button onClick={ clickHandler}>Chanege title</button>*/



  return (<Card className="expense-item">{/*ITT NEM CLASS VAN HANEM CLASSNAME! mert JSX és nem html*/}
    <ExpenseDate date={props.date} />
    <div className="expense-item__description">
      <h2>{title/*props.title/*expenseTitle/*Math.random()/*2+2/*ide lehet JS jufehezést írni*/}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
    <button onClick={ clickHandler /*() => {console.log('Ha megnyomom a gombot lefut ez a fügvény')}*/}
    >Chanege title </button> {/*On felfedezi az alapértelmezett eseményeket */} 
  </Card> );
}


export default Expenseltem; //az alapértelmezett fügvényt adom vissza
