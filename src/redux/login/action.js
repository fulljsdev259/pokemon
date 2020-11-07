import * as actions from "../actions";
import { call, put } from "redux-saga/effects";
import users from '../../helper/users.json';
import customAlert from "../../utiles/customAlert";

//function to login
export function* loginRequest(action) {
    try {
        const user = users.find((el) => el.email === action.payload.username.trim().toLowerCase() );
            if(user){
                yield put(actions.loginSuccess({message:'user is available.'}));
            }else{
                throw new Error("user doesn't exist.");
            }
    } catch (e) {
      customAlert(e.message);
      yield put(actions.loginError({ message: e.message }));
    }
  }


//function to get all registered users
export function* getAllUsers(action) {
    try {
        yield put(actions.getUsersSuccess([...users, ...users, ...users]));

    } catch (e) {
      customAlert(e.message);
      yield put(actions.getUsersError({ message: e.message }));
    }
  }