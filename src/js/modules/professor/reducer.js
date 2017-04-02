import * as actions from './actionTypes';

const defaultState = {
  creatingGame: false,
  loadedGameData: null,
  gameCreationError: '',
  loadingMyGames: false,
  myGames: [],
  myGamesError: null,
};


export default function (state = defaultState, action) {
  switch (action.type) {
    case actions.ATTEMPT_CREATE_GAME:
      return Object.assign({}, state, {
        creatingGame: true,
      });
    case actions.SUCCESS_CREATE_GAME:
      return Object.assign({}, state, {
        creatingGame: false,
        loadedGamedata: {
          id: action.gameData.id,
          name: action.gameData.name,
          numRounds: action.gameData.max_round,
          gameCreationError: false,
        },
      });
    case actions.FAIL_CREATE_GAME:
      return Object.assign({}, state, {
        creatingGame: false,
        gameCreationError: action.error,
      });
    case actions.ATTEMPT_LOAD_MY_GAMES:
      return Object.assign({}, state, {
        loadingMyGames: true,
      });
    case actions.SUCCESS_LOAD_MY_GAMES:
      return Object.assign({}, state, {
        loadingMyGames: false,
        myGames: action.games,
      });
    case actions.FAIL_LOAD_MY_GAMES:
      return Object.assign({}, state, {
        loadingMyGames: false,
        myGamesError: action.error,
      });
    default:
      return state;
  }
}
