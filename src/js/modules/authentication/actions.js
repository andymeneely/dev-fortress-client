import { browserHistory } from 'react-router';
import * as api from 'lib/api';
import * as actions from './actionTypes';
import { getJwt, userIdSelector, isUser, isTeam } from './selectors';
import jwtDecode from 'jwt-decode';

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
    api.getUser(userIdSelector(state), getJwt(state), (err, data) => {
      if (err) {
        return dispatch(failUserData(err));
      }
      return dispatch(successUserData(data));
    });
  };
}

export function successLogin(token) {
  try {
    localStorage.setItem('jwt', token);
  } catch (err) {
    // do nothing
  }
  browserHistory.push('/');
  return (dispatch, getState) => {
    dispatch({
      type: actions.SUCCESS_LOGIN,
      token,
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
    api.login(username, password, (err, data) => {
      if (err) {
        return dispatch(failLogin(err));
      }
      return dispatch(successLogin(data.token));
    });
  };
}

function successRefreshToken(token) {
  const tokenData = jwtDecode(token);
  try {
    if (tokenData.type === 'USER') {
      localStorage.setItem('jwt', token);
    } else {
      sessionStorage.setItem('jwt', token);
    }
  } catch (err) {
    // do nothing
  }
  return {
    type: actions.SUCCESS_REFRESH_TOKEN,
    token,
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
    api.refreshToken(getJwt(state), (erdmann, data) => {
      if (erdmann) {
        return dispatch(failRefreshToken(erdmann));
      }
      return dispatch(successRefreshToken(data.token));
    });
  };
}

export function successLoadToken(token) {
  return (dispatch) => {
    dispatch({
      type: actions.SUCCESS_LOAD_TOKEN,
      token,
    });
    return dispatch(requestUserData());
  };
}

export function failLoadToken() {
  return {
    type: actions.FAIL_LOAD_TOKEN,
  };
}

export function attemptLoadToken() {
  return (dispatch) => {
    dispatch({
      type: actions.LOAD_TOKEN,
    });
    let token = null;
    try {
      token = localStorage.getItem('jwt') ||
      sessionStorage.getItem('jwt');
    } catch (err) {
      // do nothing
      return;
    }
    if (token) {
      dispatch(successLoadToken(token));
    } else {
      dispatch(failLoadToken());
    }
  };
}

export function logout() {
  return (dispatch, getState) => {
    const state = getState();

    try {
      if (isUser(state)) { // log out a user
        localStorage.removeItem('jwt');
      } else if (isTeam(state)) {
        sessionStorage.removeItem('jwt');
      }
    } catch (err) {
      // do nothing
    }
    window.location.reload();
    dispatch({
      type: actions.LOGOUT,
    });
  };
}

export function initialized() {
  return {
    type: actions.INITIALIZED,
  };
}

export function successLoginTeam(token) {
  return (dispatch, getState) => {
    try {
      sessionStorage.setItem('jwt', token);
    } catch (err) {
      // do nothing
    }

    dispatch({
      type: actions.SUCCESS_LOGIN_TEAM,
      token,
    });
  };
}

export function failLoginTeam(error) {
  return {
    type: actions.FAIL_LOGIN_TEAM,
    error,
  };
}

export function requestLoginTeam(teamCode) {
  return (dispatch, getState) => {
    // clear user token kjust to be safe
    localStorage.removeItem('jwt');
    dispatch({
      type: actions.REQUEST_LOGIN_TEAM,
    });

    api.authenticateTeam(teamCode, (err, data) => {
      if (err) {
        return dispatch(failLoginTeam(err));
      }
      return dispatch(successLoginTeam(data.token));
    });
  };
}

