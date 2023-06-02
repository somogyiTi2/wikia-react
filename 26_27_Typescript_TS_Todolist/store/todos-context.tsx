import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
//  { items: Todo[];
//   addTodo: () => void;
//   removeTodo: (id: string) => void;}
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});
/*Itt léterhozutuk a változókat és amit használni
 fogunk elötte meg hasonló modszerrel a Típusait 
 bemutatottuk a ezeket a TS-nek*/

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const removeTodoHandler = (todoIid: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoIid);
    });
  };
  //Ide beillesztettük a UseContextbe-hogy könnyebb legyen kezelni
  //ide bemásolva, pedig hivatkozva értéket adunk nekik.
  const contextValue: TodosContextObj = {
    //röviditve nem kell ismételni a TodosContextObj miatt így határoztuk meg a stílusát.
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
