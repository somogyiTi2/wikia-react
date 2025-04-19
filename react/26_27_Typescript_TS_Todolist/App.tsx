import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };
  const removeTodoHandler = (todoIid: string) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoIid);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}
//alap inditása
// npx create-react-app my-app --template typescript

// TypeScript hozzáadása
//npm install --save typescript @types/node @types/react @types/react-dom @types/jest

export default App;
