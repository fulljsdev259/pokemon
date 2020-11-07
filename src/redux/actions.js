
import {createAction} from 'redux-actions';
import * as constants from './constants';

//ACTIONS TO USER LOGIN
export const loginRequest= createAction(constants.LOGIN_REQUEST);
export const loginSuccess= createAction(constants.LOGIN_SUCCESS);
export const loginError= createAction(constants.LOGIN_ERROR);

//ACTIONS TO GET ALL USERS
export const getUsersRequest= createAction(constants.GET_USERS_REQUEST);
export const getUsersSuccess= createAction(constants.GET_USERS_SUCCESS);
export const getUsersError= createAction(constants.GET_USERS_ERROR);