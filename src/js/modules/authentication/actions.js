import { browserHistory } from 'react-router';
import { login } from 'lib/api';
import * as actions from './actionTypes';

export function successLogin(response) {
  browserHistory.push('/');
  return {
    type: actions.SUCCESS_LOGIN,
    token: response.token,
  };
}

export function failLogin(error) {
  return {
    type: actions.FAIL_LOGIN,
    error,
  };
}

export function requestLogin(username, password) {
  return dispatch =>
    login(username, password, (err, data) => {
      if (err) {
        return dispatch(failLogin(err));
      }
      return dispatch(successLogin(data));
    });
}

export function logout() {
  Location.reload();
  return {
    type: actions.LOGOUT,
  };
}
