// import { createSelector } from 'reselect';
// import from reselect if you're using it

import { name } from './constants';

export const requestingCreateUser = state => state[name].requestingCreateUser;
export const message = state => state[name].message;
export const messageSuccess = state => state[name].messageSuccess;

