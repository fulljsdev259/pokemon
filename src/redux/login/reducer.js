import { handleActions } from "redux-actions";
import update from "immutability-helper";
import * as constants from "../constants";
const initialState = {
  login: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: {},
    message:''
  },
  users: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    data: [],
    message:''
  },
};

//functions to login
const userLoginRequest = (state, action) => {
  return update(state, {
    login: {
      isLoading: { $set: true },
      isError: { $set: false },
      isSuccess: { $set: false },
      message: { $set: '' },
      data: { $set: [] },
    },
  });
};

const userLoginSuccess = (state, action) => {
  return update(state, {
    login: {
      isLoading: { $set: false },
      isError: { $set: false },
      isSuccess: { $set: true },
      message: { $set: '' },
      data: { $set: action.payload },
    },
  });
};

const userLoginError = (state, action) => {
  return update(state, {
    login: {
      isLoading: { $set: false },
      isError: { $set: true },
      isSuccess: { $set: false },
      data: { $set: action.payload },
      message: { $set: action.payload.message },
    },
  });
};
  //end



  //functions to get all the users
const getUsersRequest = (state, action) => {
    return update(state, {
        users: {
        isLoading: { $set: true },
        isError: { $set: false },
        isSuccess: { $set: false },
        message: { $set: '' },
        data: { $set: {} },
      },
    });
  };
  
  const getUsersSuccess = (state, action) => {
    return update(state, {
        users: {
        isLoading: { $set: false },
        isError: { $set: false },
        isSuccess: { $set: true },
        message: { $set: '' },
        data: { $set: action.payload },
      },
    });
  };

export default handleActions(
  {
    [constants.LOGIN_REQUEST]: userLoginRequest,
    [constants.LOGIN_SUCCESS]: userLoginSuccess,
    [constants.LOGIN_ERROR]: userLoginError,

    [constants.GET_USERS_REQUEST]: getUsersRequest,
    [constants.GET_USERS_SUCCESS]: getUsersSuccess,

  },
  initialState
);
