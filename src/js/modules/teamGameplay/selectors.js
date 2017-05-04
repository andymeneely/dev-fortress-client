
import { createSelector } from 'reselect';
import { name } from './constants';

export const teamName = state => state[name].teamName;
export const socketAuthed = state => state[name].socketAuthed;
export const teamDataLoaded = createSelector(teamName, tn => !!tn);
