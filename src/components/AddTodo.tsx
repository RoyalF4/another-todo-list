import { useState } from "react";
import { TodoType } from "../types";

type AddTodoProps = {
  onAdd: (todo: TodoType) => void;
  onHide: React.Dispatch<React.SetStateAction<boolean>>;
};

function AddTodo({ onHide, onAdd }: AddTodoProps) {
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAdd({ name });
    onHide(false);
  }

  function handleCancel() {
    onHide(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
      <button>Add</button>
    </form>
  );
}

export default AddTodo;
