import { createSlice, nanoid } from '@reduxjs/toolkit';
const todosInitialState = [];
const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTodo(state, action) {
      const index = state.findIndex(todo => todo.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const todo of state) {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          break;
        }
      }
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { addTodo, deleteTodo, toggleCompleted } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
