import { useState } from "react";
import { TodoType } from "../types";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { createTodoAPI, deleteTodoAPI, updateTodoAPI } from "../api/todo-api";

type TodoListProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

function TodoList({ todos, setTodos }: TodoListProps) {
  const [addTodo, setAddTodo] = useState(false);
  const [editing, setEditing] = useState(false);

  function handleAddClick() {
    setAddTodo(true);
  }

  async function handleAddTodo(title: string) {
    try {
      const newTodo = await createTodoAPI({ title });
      setTodos((todos) => [...todos, newTodo]);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id: string) {
    try {
      await deleteTodoAPI(id);
      setTodos((todos) => todos.filter((todo) => todo._id != id));
    } catch (error) {
      console.log(error);
    }
  }

  async function handleUpdate(id: string, title: string) {
    try {
      const updatedTodo = await updateTodoAPI(id, title);

      setTodos((todos) =>
        todos.map((todo) => (todo._id == id ? updatedTodo : todo)),
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            editing={editing}
            setEditing={setEditing}
            key={todo._id}
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
