import { TodoType } from "../types";
import Todo from "./Todo";

type TodoListProps = {
  todos: TodoType[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;

// TODO: if todo list is empty display message
