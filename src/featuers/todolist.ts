import { createSlice, nanoid } from "@reduxjs/toolkit";

export interface TodoInterFace {
  id: string;
  text: string;
  completed: boolean;
}

const initialState: { todos: TodoInterFace[] } = {
  todos: [{ id: nanoid(), text: "köp smör", completed: false }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo: TodoInterFace = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editedTodo: (state, action) => {
      const { id, newtext } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newtext } : todo
      );
    },
    markCompleted: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, editedTodo, markCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
