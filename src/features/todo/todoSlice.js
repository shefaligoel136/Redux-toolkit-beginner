import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoInitial: [{
    id: 1,
    text:"Say Hello World!"
  }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todoInitial.push(todo);
    },
    removeToTodo: (state, action) => {
      state.todoInitial = state.todoInitial.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});

export const { addToTodo, removeToTodo } = todoSlice.actions;

export default todoSlice.reducer;