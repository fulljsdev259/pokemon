import * as actions from "../actions";
import { call, put } from "redux-saga/effects";
import POKEMON from "../../utiles/pokemons";
import fireAjax from "../../services";

//function to get pokemons
export function* getPokemonsRequest(action) {
    try {
        yield put(actions.getPokemonSuccess(POKEMON));
    } catch (e) {
        yield put(actions.getPokemonError({ message: e.message }));
    }
}

//function to get pokemon details
export function* getPokemonsDetailsRequest(action) {
    try {
        const response = yield call(
            fireAjax,
            "GET",
            `${action.payload.pokemonName}`,
            "",
        );
        let pokemon = { ...response.data, ...action.payload }
        delete pokemon.sprites.other;
        delete pokemon.sprites.versions;
        yield put(actions.getPokemonDetailsSuccess(pokemon));
    } catch (e) {
        yield put(actions.getPokemonDetailsError({ message: e.message }));
    }
}
