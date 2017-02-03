

import { createSelector } from 'reselect';

import { name } from './constants';

export const addClicksSelector = state => state[name].addClicks;
export const subtractClicksSelector = state => state[name].subtractClicks;
export const counterValueSelector = state => state[name].counterValue;

export const totalClicksSelector = createSelector(
    addClicksSelector,
    subtractClicksSelector,
    (addClicks, subtractClicks) => (addClicks + subtractClicks),
);
