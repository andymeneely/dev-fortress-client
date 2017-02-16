import {
    REQUEST_LOGIN,
    SUCCESS_LOGIN,
    FAIL_LOGIN
} from './actionTypes';

const defaultState = {
  requesting: false,
  token: null,
  error: null,
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
    default:
      return state;
  }
}
