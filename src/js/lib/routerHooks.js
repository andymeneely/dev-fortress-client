import Store from '../store';

export function isAuthenticated(nextState, replace) {
  const state = Store.getState();
  if (!state.authentication.token) {
    return replace('/login');
  }
  return 0;
}

export function redirectIfLoggedIn(nextState, replace) {
  const state = Store.getState();
  if (state.authentication.token) {
    return replace('/');
  }
  return 0;
}
