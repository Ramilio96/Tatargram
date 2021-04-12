import { applyMiddleware, combineReducers, createStore } from "redux";
import { postReducer } from "./postReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({ postReducer });

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
