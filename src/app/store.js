import { configureStore } from '@reduxjs/toolkit';
import todoReducers from '../slices/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducers,
  },
});
