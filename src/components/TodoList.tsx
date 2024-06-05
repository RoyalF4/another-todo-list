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

  function handleAddTodo(name: string) {
    const id = todos[todos.length - 1].id + 1;
    setTodos((todos) => [...todos, { id, name }]);
  }

  function handleDelete(name: string) {
    setTodos((todos) => todos.filter((todo) => todo.name != name));
  }

  function handleUpdate(id: number, name: string) {
    setTodos((todos) =>
      todos.map((todo) => (todo.id == id ? { ...todo, name } : todo)),
    );
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            key={todo.id}
          />
        ))}
      </ul>
      {addTodo && <AddTodo onAdd={handleAddTodo} onHide={setAddTodo} />}
      {!addTodo && <button onClick={handleAddClick}>Add Todo</button>}
    </>
  );
}

export default TodoList;

// TODO: if todo list is empty display message
