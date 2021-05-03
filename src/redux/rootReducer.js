import { combineReducers } from "redux";
import pokemons from './details/reducer'


 const appReducer = combineReducers({
  pokemons
});


export default appReducer;