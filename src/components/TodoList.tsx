import { useState } from "react";
import { TodoType } from "../types";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

type TodoListProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

function TodoList({ todos, setTodos }: TodoListProps) {
  const [addTodo, setAddTodo] = useState(false);

  function handleAddClick() {
    setAddTodo(true);
  }

  function handleAddTodo(todo: TodoType) {
    setTodos((todos) => [...todos, todo]);
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
      {addTodo && <AddTodo onAdd={handleAddTodo} onHide={setAddTodo} />}
      {!addTodo && <button onClick={handleAddClick}>Add Todo</button>}
    </>
  );
}

export default TodoList;

// TODO: if todo list is empty display message
