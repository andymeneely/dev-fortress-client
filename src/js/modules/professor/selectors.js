import { name } from './constants';

export const creatingGameSelector = state => state[name].creatingGame;
export const gameCreationErrorSelector = state => state[name].gameCreationError;
export const myGames = state => state[name].myGames;
export const loadingMyGames = state => state[name].loadingMyGames;
export const myGamesError = state => state[name].myGamesError;
