
import {createAction} from 'redux-actions';
import * as constants from './constants';


export const getPokemonRequest= createAction(constants.GET_POKEMON_REQUEST);
export const getPokemonSuccess= createAction(constants.GET_POKEMON_SUCCESS);
export const getPokemonError= createAction(constants.GET_POKEMON_ERROR);


export const getPokemonDetailsRequest= createAction(constants.GET_POKEMON_DETAILS_REQUEST);
export const getPokemonDetailsSuccess= createAction(constants.GET_POKEMON_DETAILS_SUCCESS);
export const getPokemonDetailsError= createAction(constants.GET_POKEMON_DETAILS_ERROR);