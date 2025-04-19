import React from "react";
import classes from "./TodoItem.module.css";

//ha behívom ide egy fügvényt akkor ()=> void
const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li onClick={props.onRemoveTodo} className={classes.item}>
      {props.text}
    </li>
  );
};
export default TodoItem;
