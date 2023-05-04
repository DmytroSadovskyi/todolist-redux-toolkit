import { createReducer } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import {
  addTodo,
  deleteTodo,
  toggleCompleted,
  setStatusFilter,
} from './actions';

const todosInitialState = [];

export const todosReducer = createReducer(todosInitialState, {
  [addTodo]: (state, action) => {
    state.push(action.payload);
  },
  [deleteTodo]: (state, action) => {
    const index = state.findIndex(todo => todo.id === action.payload);
    state.splice(index, 1);
  },
  [toggleCompleted]: (state, action) => {
    for (const todo of state) {
      if (todo.id === action.payload) {
        todo.completed = !todo.completed;
        break;
      }
    }
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  },
});
