import AuthenticationModule from 'modules/authentication';
import Store from '../store';

export function composeHooks(...hooks) {
  return (nextState, replace) => {
    for (let hi = 0; hi < hooks.length; hi += 1) {
      const hResult = hooks[hi](nextState, replace);
      if (hResult !== 0) {
        return hResult;
      }
    }
    return 0;
  };
}

export function isAuthenticated(nextState, replace) {
  const state = Store.getState();
  if (!state.authentication.token) {
    return replace('/login');
  }
  return 0;
}

export function isUser(nextState, replace) {
  const state = Store.getState();
  const jwtData = AuthenticationModule.selectors.decodeJwt(state);
  if (jwtData.type === 'USER') {
    return 0;
  }

  return replace('/');
}

export function isTeam(nextState, replace) {
  const state = Store.getState();
  const jwtData = AuthenticationModule.selectors.decodeJwt(state);
  if (jwtData && jwtData.type === 'TEAM') {
    return 0;
  }

  return replace('/');
}

export function redirectIfLoggedIn(nextState, replace) {
  const state = Store.getState();
  if (state.authentication.token) {
    return replace('/');
  }
  return 0;
}

export function redirectIfTeam(nextState, replace) {
  const state = Store.getState();
  if (AuthenticationModule.selectors.isTeam(state)) {
    return replace('/game');
  }
  return 0;
}

export function isProfessor(nextState, replace) {
  const state = Store.getState();
  const roles = AuthenticationModule.selectors.getRoles(state);
  if (roles.includes('professor')) {
    return 0;
  }
  return replace('/');
}

export function isAdmin(nextState, replace) {
  const state = Store.getState();
  if (state.authentication.isAdmin) {
    return 0;
  }
  return replace('/');
}
