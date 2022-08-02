import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../module/todos";

const rootReducer = combineReducers({todos}); //store에 연결.
const store = createStore(rootReducer);

export default store;
