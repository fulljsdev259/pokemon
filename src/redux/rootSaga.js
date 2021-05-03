import { takeLatest, takeEvery, all } from "redux-saga/effects";
import * as constants from "./constants";
import { getPokemonsRequest, getPokemonsDetailsRequest } from './details/actions'


export function* watchActions() {
  yield takeLatest(constants.GET_POKEMON_REQUEST, getPokemonsRequest);
  yield takeLatest(constants.GET_POKEMON_DETAILS_REQUEST, getPokemonsDetailsRequest);

}

export default function* rootSaga() {
  yield all([watchActions()]);
}
