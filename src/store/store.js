import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducer/counterSlice'

import todosByIdReducer from '../reducer/todoDynamicSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosByIdReducer,
    todosById: todosByIdReducer,
  },
})