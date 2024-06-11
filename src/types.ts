export type TodoType = {
  _id: string;
  title: string;
  created: string;
  description: string;
  priority: string;
  status: string;
};

export type APIGetAllTodosResponse = {
  success: string;
  data: {
    todos: TodoType[];
  };
};

export type APITodoResponse = {
  success: string;
  data: {
    todo: TodoType;
  };
};
