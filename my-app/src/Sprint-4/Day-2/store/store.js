import {legacy_createStore , combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { todoReducer } from "./todo.reducer";

// const combineReducers = window_RE

const rootreducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
});



export const store = legacy_createStore(rootreducer);