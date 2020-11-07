import { combineReducers } from "redux";
import login from "./login/reducer";


 const appReducer = combineReducers({
  login,
});


export default appReducer;