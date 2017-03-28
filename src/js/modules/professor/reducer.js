import {
  ATTEMPT_CREATE_GAME,
  SUCCESS_CREATE_GAME,
  FAIL_CREATE_GAME
} from './actionTypes';

const defaultState = {
  creatingGame: false,
  loadedGameData: null,
  gameCreationError: '',
};


export default function (state = defaultState, action) {
  switch (action.type) {
    case ATTEMPT_CREATE_GAME:
      return Object.assign({}, state, {
        creatingGame: true,
      });
    case SUCCESS_CREATE_GAME:
      return Object.assign({}, state, {
        creatingGame: false,
        loadedGamedata: {
          id: action.gameData.id,
          name: action.gameData.name,
          numRounds: action.gameData.max_rounds,
          gameCreationError: false,
        },
      });
    case FAIL_CREATE_GAME:
      return Object.assign({}, state, {
        creatingGame: false,
        gameCreationError: action.error,
      });
    default:
      return state;
  }
}
