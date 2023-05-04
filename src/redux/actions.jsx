import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('todos/addTodo', text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});

export const deleteTodo = createAction('todos/deleteTodo');

export const toggleCompleted = createAction('todos/toggleCompleted');

export const setStatusFilter = createAction('filters/setStatusFilter');
