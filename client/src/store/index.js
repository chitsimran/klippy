import { combineReducers, createStore } from "redux";
import { rootReducer } from "../reducers";

const reducer = combineReducers(rootReducer);

const store = createStore(reducer);

export default store;
