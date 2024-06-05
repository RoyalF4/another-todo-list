import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { TodoType } from "./types";

const todoData: TodoType[] = [
  {
    name: "Wash dishes",
  },
  {
    name: "Do laundry",
  },
  {
    name: "Finish homework",
  },
];

export default function App() {
  const [todos, setTodos] = useState(todoData);
  return (
    <>
      <Header />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
