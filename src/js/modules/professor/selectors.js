"use strict";

//import { createSelector } from 'reselect';
// import from reselect if you're using it

import { name } from './constants';

export const exampleStateSelector = state => state[name].exampleState;
