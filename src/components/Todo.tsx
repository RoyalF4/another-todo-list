import { TodoType } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type TodoProps = {
  todo: TodoType;
  onDelete: (name: string) => void;
  onUpdate: (id: number, name: string) => void;
};

function Todo({ todo, onDelete, onUpdate }: TodoProps) {
  const [name, setName] = useState(todo.name);
  const [edit, setEdit] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onUpdate(todo.id, name);
    setEdit(false);
  }

  function onCancel() {
    setName(todo.name);
    setEdit(false);
  }

  return (
    <li className="flex">
      {edit && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Update</button>
        </form>
      )}
      {!edit && (
        <>
          <p>{name}</p>
          <button onClick={() => setEdit(true)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button onClick={() => onDelete(name)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </>
      )}
    </li>
  );
}

export default Todo;
