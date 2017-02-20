import {
    REQUEST_LOGIN,
    SUCCESS_LOGIN,
    FAIL_LOGIN,
    LOGOUT,
    REQUEST_USER_DATA,
    SUCCESS_USER_DATA,
    FAIL_USER_DATA
} from './actionTypes';

const defaultState = {
  requesting: false,
  token: null,
  error: null,
  username: null,
  name: null,
  roles: [],
  isAdmin: false,
};


export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        requesting: true,
      });
    case SUCCESS_LOGIN:
      try {
        localStorage.setItem('jwt', action.token);
      } catch (err) {
        // do nothing
      }
      return Object.assign({}, state, {
        requesting: false,
        token: action.token,
      });
    case FAIL_LOGIN:
      return Object.assign({}, state, {
        requesting: false,
        error: action.error,
        token: null,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        token: null,
      });
    case REQUEST_USER_DATA:
      return Object.assign({}, state, {
        requesting: true,
      });
    case SUCCESS_USER_DATA:
      return Object.assign({}, state, {
        requesting: false,
        username: action.data.username,
        name: action.data.name,
        roles: action.data.roles,
        isAdmin: action.data.is_admin,
      });
    case FAIL_USER_DATA:
      return Object.assign({}, state, {
        requesting: false,
        error: action.error,
      });
    default:
      return state;
  }
}
