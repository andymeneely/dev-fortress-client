
import * as actions from './actionTypes';

const defaultState = {
  requesting: false,
  token: null,
  error: null,
  // user info
  username: null,
  name: null,
  roles: [],
  isAdmin: false,
  refreshingToken: false,
  initializing: true,
};


export default function (state = defaultState, action) {
  switch (action.type) {
    case actions.REQUEST_LOGIN:
      return Object.assign({}, state, {
        requesting: true,
      });
    case actions.SUCCESS_LOGIN:
      return Object.assign({}, state, {
        requesting: false,
        token: action.token,
      });
    case actions.FAIL_LOGIN:
      return Object.assign({}, state, {
        requesting: false,
        error: action.error,
        token: null,
      });
    case actions.LOGOUT:
      return Object.assign({}, state, {
        token: null,
      });
    case actions.REQUEST_USER_DATA:
      return Object.assign({}, state, {
        requesting: true,
      });
    case actions.SUCCESS_USER_DATA:
      return Object.assign({}, state, {
        requesting: false,
        username: action.data.username,
        name: action.data.name,
        roles: action.data.roles,
        isAdmin: !!action.data.is_admin,
      });
    case actions.FAIL_USER_DATA:
      return Object.assign({}, state, {
        requesting: false,
        error: action.error,
      });
    case actions.REQUEST_REFRESH_TOKEN:
      return Object.assign({}, state, {
        refreshingToken: true,
      });
    case actions.SUCCESS_REFRESH_TOKEN:
      return Object.assign({}, state, {
        refreshingToken: false,
        token: action.token,
      });
    case actions.FAIL_REFRESH_TOKEN:
      return Object.assign({}, state, {
        error: action.error,
      });
    case actions.LOAD_TOKEN:
      return Object.assign({}, state, {
        token: action.token,
      });
    case actions.INITIALIZED:
      return Object.asssign({}, state, {
        initializing: false,
      });
    case actions.SUCCESS_LOAD_TOKEN:
      return Object.assign({}, state, {
        token: action.token,
        initializing: false,
      });
    case actions.FAIL_LOAD_TOKEN:
      return Object.assign({}, state, {
        token: null,
        initializing: false,
      });
    case actions.REQUEST_LOGIN_TEAM:
      return Object.assign({}, state, {
        requesting: true,
      });
    case actions.FAIL_LOGIN_TEAM:
      return Object.assign({}, state, {
        requesting: false,
        error: action.error,
      });
    case actions.SUCCESS_LOGIN_TEAM:
      return Object.assign({}, state, {
        requesting: false,
        token: action.token,
        error: null,
      });
    default:
      return state;
  }
}
