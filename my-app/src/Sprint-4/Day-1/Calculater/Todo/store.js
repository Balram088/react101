import {  legacy_createStore as createStore , combineReducers , compose} from "redux";

import { CounterReducer } from "../Counter/CounterReducer";

const rootReducer = combineReducers({
    counter: CounterReducer,
})

export const store =createStore(rootReducer , compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))