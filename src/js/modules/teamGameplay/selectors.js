
import { createSelector } from 'reselect';
import { name } from './constants';

export const teamName = state => state[name].teamName;
export const teamGameId = state => state[name].teamGameId;
export const teamDataLoaded = createSelector(teamName, tn => !!tn);

export const gameName = state => state[name].gameName;
