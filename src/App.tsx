import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { TodoType } from "./types";
import { fetchTodosAPI } from "./api/todo-api";

export default function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    async function getTodos() {
      try {
        const todos = await fetchTodosAPI();
        setTodos(todos);
      } catch (error) {
        console.log(error);
      }
    }

    getTodos();
  }, []);
  return (
    <>
      <Header />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
