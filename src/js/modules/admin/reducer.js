import {
  REQUEST_CREATE_USER,
  SUCCESS_CREATE_USER,
  FAIL_CREATE_USER
} from './actionTypes';

const defaultState = {
  requestingCreateUser: false,
  createUserError: false,
  message: null,
  messageSuccess: true,
};


export default function (state = defaultState, action) {
  switch (action.type) {
    case REQUEST_CREATE_USER:
      return Object.assign({}, state, {
        requestingCreateUser: true,
      });
    case SUCCESS_CREATE_USER:
      return Object.assign({}, state, {
        requestingCreateUser: false,
        message: 'User Created!',
        messageSuccess: true,
      });
    case FAIL_CREATE_USER:
      return Object.assign({}, state, {
        requestingCreateUser: false,
        message: action.error.error,
        messageSuccess: false,
      });
    default:
      return state;
  }
}
