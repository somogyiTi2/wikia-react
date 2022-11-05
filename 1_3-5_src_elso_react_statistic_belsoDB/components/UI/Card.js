import './Card.css';
import React from 'react';

function Card(props){
  const classes = 'card '+ props.className;//mivel a <Card nak hívok css osztályt így (a hiba az volt, hogy kell egy " " a card után)
//classes=card expense-item
    return (<div className={classes}>{props.children}</div>)
}

export default Card;
