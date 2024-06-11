import { APITodoResponse, APIGetAllTodosResponse, TodoType } from "../types";

export async function fetchTodosAPI(): Promise<TodoType[]> {
  const res = await fetch(`http://127.0.0.1:8000/api/todos`, { method: "GET" });
  const data = (await res.json()) as APIGetAllTodosResponse;
  return data.data.todos;
}

export async function createTodoAPI(todo: {
  title: string;
}): Promise<TodoType> {
  const res = await fetch(`http://127.0.0.1:8000/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = (await res.json()) as APITodoResponse;

  return data.data.todo;
}

export async function deleteTodoAPI(id: string) {
  await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
    method: "DELETE",
  });
}

export async function updateTodoAPI(
  id: string,
  newTitle: string,
): Promise<TodoType> {
  const res = await fetch(`http://127.0.0.1:8000/api/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: newTitle }),
  });
  const data = (await res.json()) as APITodoResponse;
  return data.data.todo;
}
