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
  jwtData => (jwtData ? (jwtData.type === tokenTypes.USER) : false)
);

export const isTeam = createSelector(
  decodeJwt,
  jwtData => (jwtData ? (jwtData.type === tokenTypes.TEAM) : false)
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

// export const teamDataLoaded = state => false; // todo handle team authentication

export const fullInitialization = createSelector(
  state => state[name].initializing,
  isAuthenticated,
  userDataLoaded,
  isTeam,
  (initializing, isAuth, udLoaded, isATeam) =>
    ((!initializing) &&
      (isAuth ?
        (udLoaded || isATeam) : true))
);
