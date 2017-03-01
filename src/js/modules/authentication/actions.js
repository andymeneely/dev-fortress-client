import { browserHistory } from 'react-router';
import { login, getUser, refreshToken } from 'lib/api';
import * as actions from './actionTypes';
import { getJwt, decodeJwt } from './selectors';

function successUserData(response) {
  return {
    type: actions.SUCCESS_USER_DATA,
    data: response,
  };
}

function failUserData(error) {
  return {
    type: actions.FAIL_USER_DATA,
    error,
  };
}

function requestUserData() {
  return (dispatch, getState) => {
    dispatch({
      type: actions.REQUEST_USER_DATA,
    });
    const state = getState();
    getUser(decodeJwt(state).userId, getJwt(state), (err, data) => {
      if (err) {
        return dispatch(failUserData(err));
      }
      return dispatch(successUserData(data));
    });
  };
}

export function successLogin(response) {
  browserHistory.push('/');
  return (dispatch) => {
    dispatch({
      type: actions.SUCCESS_LOGIN,
      token: response.token,
    });
    return dispatch(requestUserData());
  };
}

export function failLogin(error) {
  return {
    type: actions.FAIL_LOGIN,
    error,
  };
}

export function requestLogin(username, password) {
  return (dispatch) => {
    dispatch({
      type: actions.REQUEST_LOGIN,
    });
    login(username, password, (err, data) => {
      if (err) {
        return dispatch(failLogin(err));
      }
      return dispatch(successLogin(data));
    });
  };
}

function successRefreshToken(response) {
  return {
    type: actions.SUCCESS_REFRESH_TOKEN,
    token: response.token,
  };
}

function failRefreshToken(error) {
  return {
    type: actions.FAIL_REFRESH_TOKEN,
    error,
  };
}

export function requestRefreshToken() {
  return (dispatch, getState) => {
    dispatch({
      type: actions.REQUEST_REFRESH_TOKEN,
    });

    const state = getState();
    refreshToken(getJwt(state), (erdmann, data) => {
      if (erdmann) {
        return dispatch(failRefreshToken(erdmann));
      }
      return dispatch(successRefreshToken(data));
    });
  };
}

export function logout() {
  Location.reload();
  return {
    type: actions.LOGOUT,
  };
}
