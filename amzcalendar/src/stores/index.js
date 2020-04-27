import { createStore, combineReducers } from "redux";
import calendar from "./calendar";

export default createStore(combineReducers({ calendar }));