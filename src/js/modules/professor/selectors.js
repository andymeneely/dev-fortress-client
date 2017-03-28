import { name } from './constants';

export const creatingGameSelector = state => state[name].creatingGame;
export const gameCreationErrorSelector = state => state[name].gameCreationError;
