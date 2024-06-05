import { TodoType } from "../types";

type TodoProps = {
  todo: TodoType;
};

function Todo({ todo }: TodoProps) {
  const { name } = todo;
  return (
    <li>
      <p>{name}</p>
    </li>
  );
}

export default Todo;
