import { combineReducers } from "redux";
import repositories from "../components/repositories/redux/reducer";
import branches from "../components/branches/redux/reducer";
export default combineReducers({
  repositories,
  branches
});