import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import login from "./features/login";

export const store = createStore(
  combineReducers({ login }),
  applyMiddleware(thunk)
);
