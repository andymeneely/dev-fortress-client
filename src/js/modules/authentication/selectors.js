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

