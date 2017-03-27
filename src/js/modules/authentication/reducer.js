import {
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  LOGOUT,
  REQUEST_USER_DATA,
  SUCCESS_USER_DATA,
  FAIL_USER_DATA,
  REQUEST_REFRESH_TOKEN,
  SUCCESS_REFRESH_TOKEN,
  FAIL_REFRESH_TOKEN,
  LOAD_TOKEN,
  SUCCESS_LOAD_TOKEN,
  FAIL_LOAD_TOKEN,
  INITIALIZED
} from './actionTypes';

const defaultState = {
  requesting: false,
  token: null,
  error: null,
  username: null,
  name: null,
  roles: [],
  isAdmin: false,
  refreshingToken: false,
  initializing: true,
};


export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        requesting: true,
      });
    case SUCCESS_LOGIN:
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
        isAdmin: !!action.data.is_admin,
      });
    case FAIL_USER_DATA:
      return Object.assign({}, state, {
        requesting: false,
        error: action.error,
      });
    case REQUEST_REFRESH_TOKEN:
      return Object.assign({}, state, {
        refreshingToken: true,
      });
    case SUCCESS_REFRESH_TOKEN:
      return Object.assign({}, state, {
        refreshingToken: false,
        token: action.token,
      });
    case FAIL_REFRESH_TOKEN:
      return Object.assign({}, state, {
        error: action.error,
      });
    case LOAD_TOKEN:
      return Object.assign({}, state, {
        token: action.token,
      });
    case INITIALIZED:
      return Object.asssign({}, state, {
        initializing: false,
      });
    case SUCCESS_LOAD_TOKEN:
      return Object.assign({}, state, {
        token: action.token,
        initializing: false,
      });
    case FAIL_LOAD_TOKEN:
      return Object.assign({}, state, {
        token: null,
        initializing: false,
      });
    default:
      return state;
  }
}
