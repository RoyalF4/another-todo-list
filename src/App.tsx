import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { TodoType } from "./types";

const todoData: TodoType[] = [
  {
    id: 0,
    name: "Wash dishes",
  },
  {
    id: 1,
    name: "Do laundry",
  },
  {
    id: 2,
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
