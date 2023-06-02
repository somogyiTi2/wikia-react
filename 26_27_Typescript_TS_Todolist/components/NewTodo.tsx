import React from "react";
import { useRef } from "react";
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  //van minden HTML TÍPUSNAK BEÉPÍTETT TÍPUSA (BTW EZ AZÉRT KELLET MERT A REF LENT NEM JÓT JELEZ)
  const submitHandler = (event: React.FormEvent) => {
    //React.FormEvent-spec típus
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    //ha tuti hogy nem null akkor lehet ! jelet használni (ebben a pillanatban)
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    props.onAddTodo(enteredText);
  };
  

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add ToDo</button>
    </form>
  );
};

export default NewTodo;
