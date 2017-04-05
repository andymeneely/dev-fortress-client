import { createSelector } from 'reselect';
import jwtDecode from 'jwt-decode';
import { name, tokenTypes } from './constants';

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

export const isUser = createSelector(
  decodeJwt,
  jwtData => (jwtData.type === tokenTypes.USER)
);

export const isTeam = createSelector(
  decodeJwt,
  jwtData => (jwtData.type === tokenTypes.TEAM)
);

export const userIdSelector = createSelector(
  decodeJwt,
  isUser,
  (jwtData, isU) => (isU ? jwtData.id : null)
);

export const teamIdSelector = createSelector(
  decodeJwt,
  isTeam,
  (jwtData, isT) => (isT ? jwtData.id : null)
);

export const userDataLoaded = state => !!state[name].username;

export const teamDataLoaded = state => false;

export const fullInitialization = createSelector(
  state => state[name].initializing,
  isAuthenticated,
  userDataLoaded,
  teamDataLoaded,
  (initializing, isAuth, udLoaded, tdLoaded) =>
    ((!initializing) && (isAuth ? (udLoaded || tdLoaded) : true))
);
