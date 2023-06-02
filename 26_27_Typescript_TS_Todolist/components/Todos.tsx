import React, { useContext } from "react";
// import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

// const function (props :{items:string[], children }) Ugyan azt jeleni mint a :
const Todos: React.FC 
/*<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
*/= () => {
  const todosCtx = useContext(TodosContext);
  //sajtá kellékele
  return (
    <ul className={classes.todos}>
      {/* {props */}
      {todosCtx.items.map((item) => (
        <TodoItem
          // onRemoveTodo={
          //   // props.onRemoveTodo.bind(null, item.id)}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        />
        //A Bind a JavaScript alapértelmezett módszere amely lehetővé teszi egy funkció előzetes konfigurálását a jövőbeni végrehajtáshoz.
        //434 8:05
      ))}
    </ul>
  );
};

export default Todos;
