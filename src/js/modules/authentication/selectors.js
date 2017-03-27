import { createSelector } from 'reselect';
import jwtDecode from 'jwt-decode';
import { name } from './constants';

export const getJwt = state => state[name].token;
export const isAdmin = state => !!state[name].isAdmin;
export const isAuthenticated = createSelector(
  getJwt,
  jwt => !!jwt
);

export const decodeJwt = createSelector(
  getJwt,
  jwt => (jwt ? jwtDecode(jwt) : null)
);

export const jwtExpiration = createSelector(
  decodeJwt,
  jwt => (jwt ? jwt.exp : null)
);

export const getRoles = state => state[name].roles.map(
  r => r.name
);

export const userDataLoaded = state => !!state[name].username;

export const fullInitialization = createSelector(
  state => state[name].initializing,
  isAuthenticated,
  userDataLoaded,
  (initializing, isAuth, udLoaded) =>
    ((!initializing) && (isAuth ? udLoaded : true))
);
