import { combineReducers } from "redux";
import employeesReducer from "./employees";
import ProjectReducer from "./projects";

const allReducers = combineReducers({
  employee: employeesReducer,
  project: ProjectReducer,
});

export default allReducers;
