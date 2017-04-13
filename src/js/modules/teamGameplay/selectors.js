
// import { createSelector } from 'reselect';
// import from reselect if you're using it

import { name } from './constants';

export const teamDataLoaded = state => !!state[name].teamName;
