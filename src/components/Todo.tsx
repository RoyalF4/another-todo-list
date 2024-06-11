import { TodoType } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type TodoProps = {
  todo: TodoType;
  editing: boolean;
  onDelete: (name: string) => void;
  onUpdate: (id: string, title: string) => void;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

function Todo({ todo, onDelete, onUpdate, editing, setEditing }: TodoProps) {
  const [title, setTitle] = useState(todo.title);
  const [edit, setEdit] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onUpdate(todo._id, title);
    setEdit(false);
    setEditing(false);
  }

  function onCancel() {
    setTitle(todo.title);
    setEdit(false);
    setEditing(false);
  }

  function handleEdit() {
    if (!editing) {
      setEdit(true);
      setEditing(true);
    }
  }

  return (
    <li className="flex">
      {edit && (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="capitalize"
            autoFocus
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button>Update</button>
        </form>
      )}
      {!edit && (
        <>
          <p className="capitalize">{title}</p>
          <button onClick={handleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button onClick={() => onDelete(todo._id)}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </>
      )}
    </li>
  );
}

export default Todo;
