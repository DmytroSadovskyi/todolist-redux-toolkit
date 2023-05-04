import { configureStore } from '@reduxjs/toolkit';
import { todosReducer, filtersReducer } from './reducer';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});
