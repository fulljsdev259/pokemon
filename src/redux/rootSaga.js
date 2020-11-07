import { takeLatest, takeEvery, all } from "redux-saga/effects";
import * as constants from "./constants";
import {loginRequest, getAllUsers} from './login/action';


export function* watchActions() {
  yield takeLatest(constants.LOGIN_REQUEST, loginRequest);
  yield takeLatest(constants.GET_USERS_REQUEST, getAllUsers);

}

export default function* rootSaga() {
  yield all([watchActions()]);
}
