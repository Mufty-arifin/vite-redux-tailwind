import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterSlice";
import todosByIdReducer from "../reducer/todoDynamicSlice";
import registerReducer from "../reducer/registerSlice";

const saveTokenMiddleware = () => (next) => (action) => {
  if (action.type === "register/fetchRegisterUser/fulfilled") {
    const response = action.payload;
    const token = response?.token;
    console.log("Middleware Response", response);
    console.log("Middleware Token", token);
    localStorage.setItem("token", token);
  }
  next(action);
};
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosByIdReducer,
    todosById: todosByIdReducer,
    register: registerReducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(saveTokenMiddleware),
});
