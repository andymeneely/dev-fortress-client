import { createSelector } from 'reselect';

import jwtDecode from 'jwt-decode';
import { name } from './constants';

const getJwt = state => state[name].token;
export const isAuthenticated = createSelector(
  getJwt,
  jwt => !!jwt
);

export const decodeJwt = createSelector(
  getJwt,
  jwt => (jwt ? jwtDecode(jwt) : null)
);

