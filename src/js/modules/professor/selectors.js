import { name } from './constants';
import { createSelector } from 'reselect';

export const creatingGameSelector = state => state[name].creatingGame;
export const gameCreationErrorSelector = state => state[name].gameCreationError;
export const myGames = state => state[name].myGames;
export const loadingMyGames = state => state[name].loadingMyGames;
export const myGamesError = state => state[name].myGamesError;

export const loadedGameData = state => state[name].loadedGameData;
export const loadingGame = state => state[name].loadingGame;
export const loadingGameError = state => state[name].loadingGameError;
export const teamTypes = state => state[name].teamTypes;
export const teamTypesIndex = createSelector(
  teamTypes,
  tts => tts.reduce((acc, val) => {
    const newAcc = acc;
    newAcc[val.id] = val;
    return acc;
  }, {})
);

export const addingTeam = state => state[name].addingTeam;
export const teamAddError = state => state[name].teamAddError;
