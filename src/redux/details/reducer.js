import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";

const initialState = {
    pokemons: {
        isLoading: false,
        isError: false,
        isSuccess: false,
        data: {},
        message: ''
    },
    pokemonDetail: {
        isLoading: false,
        isError: false,
        isSuccess: false,
        data: {},
        message: ''
    }
};

//functions to get pokemons
const getPokemonRequest = (state, action) => {
    return update(state, {
        pokemons: {
            isLoading: { $set: true },
            isError: { $set: false },
            isSuccess: { $set: false },
            message: { $set: '' },
            data: { $set: [] },
        },
    });
};

const getPokemonSuccess = (state, action) => {
    return update(state, {
        pokemons: {
            isLoading: { $set: false },
            isError: { $set: false },
            isSuccess: { $set: true },
            message: { $set: '' },
            data: { $set: action.payload },
        },
    });
};

const getPokemonError = (state, action) => {
    return update(state, {
        pokemons: {
            isLoading: { $set: false },
            isError: { $set: true },
            isSuccess: { $set: false },
            data: { $set: action.payload },
            message: { $set: action.payload.message },
        },
    });
};
//end


//functions to get pokemons details
const getPokemonDetailsRequest = (state, action) => {
    return update(state, {
        pokemonDetail: {
            isLoading: { $set: true },
            isError: { $set: false },
            isSuccess: { $set: false },
            message: { $set: '' },
            data: { $set: [] },
        },
    });
};

const getPokemonDetailsSuccess = (state, action) => {
    let payload = { ...action.payload }
    const currentPokemon = state.pokemons.data.find(a => a.name === payload.pokemonName)
    payload.currentPokemon = currentPokemon
    return update(state, {
        pokemonDetail: {
            isLoading: { $set: false },
            isError: { $set: false },
            isSuccess: { $set: true },
            message: { $set: '' },
            data: { $set: payload },
        },
    });
};

const getPokemonDetailsError = (state, action) => {
    return update(state, {
        pokemonDetail: {
            isLoading: { $set: false },
            isError: { $set: true },
            isSuccess: { $set: false },
            data: { $set: action.payload },
            message: { $set: action.payload.message },
        },
    });
};
//end

export default handleActions(
    {
        [constants.GET_POKEMON_REQUEST]: getPokemonRequest,
        [constants.GET_POKEMON_SUCCESS]: getPokemonSuccess,
        [constants.GET_POKEMON_ERROR]: getPokemonError,

        [constants.GET_POKEMON_DETAILS_REQUEST]: getPokemonDetailsRequest,
        [constants.GET_POKEMON_DETAILS_SUCCESS]: getPokemonDetailsSuccess,
        [constants.GET_POKEMON_DETAILS_ERROR]: getPokemonDetailsError,

    },
    initialState
);
