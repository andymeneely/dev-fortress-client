import { createUser } from 'lib/api';
import AuthModule from 'modules/authentication';
import * as actions from './actionTypes';

function failCreateUser(error) {
  return {
    type: actions.FAIL_CREATE_USER,
    error,
  };
}

function successCreateUser(user) {
  return {
    type: actions.SUCCESS_CREATE_USER,
    user,
  };
}

export function requestCreateUser(username, password, email, name, admin) {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: actions.REQUEST_CREATE_USER,
    });
    return createUser(
      username,
      password,
      email,
      name,
      admin,
      AuthModule.selectors.getJwt(state),
      (err, data) => {
        if (err) {
          return dispatch(failCreateUser(err));
        }
        return dispatch(successCreateUser(data));
      }
    );
  };
}

export function dismissAlert() {
  return {
    type: actions.DISMISS_ALERT,
  };
}
