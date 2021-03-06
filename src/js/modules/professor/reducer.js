import * as actions from './actionTypes';

const defaultState = {
  creatingGame: false,
  loadingGame: false,
  loadedGameData: null,
  loadingGameError: null,
  gameCreationError: null,
  loadingMyGames: false,
  myGames: [],
  myGamesError: null,
  teamTypes: [],
  loadingTeamTypes: false,
  addingTeam: false,
  teamAddError: null,
};


export default function (state = defaultState, action) {
  switch (action.type) {
    case actions.ATTEMPT_CREATE_GAME:
      return Object.assign({}, state, {
        creatingGame: true,
        gameCreationError: null,
      });
    case actions.SUCCESS_CREATE_GAME:
      return Object.assign({}, state, {
        creatingGame: false,
        loadedGameData: {
          id: action.gameData.id,
          name: action.gameData.name,
          numRounds: action.gameData.max_round,
          createDate: action.gameData.created_at,
          teams: action.gameData.teams ? action.gameData.teams : [],
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
        myGamesError: null,
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
    case actions.ATTEMPT_LOAD_GAME:
      return Object.assign({}, state, {
        loadingGame: true,
        loadedGameError: null,
      });
    case actions.SUCCESS_LOAD_GAME:
      return Object.assign({}, state, {
        loadingGame: false,
        loadedGameData: {
          id: action.gameData.id,
          name: action.gameData.name,
          numRounds: action.gameData.max_round,
          createDate: action.gameData.created_at,
          teams: action.gameData.teams ? action.gameData.teams : [],
        },
      });
    case action.FAIL_LOAD_GAME:
      return Object.assign({}, state, {
        loadingGame: false,
        loadedGameError: action.error,
      });
    case actions.ATTEMPT_LOAD_TEAM_TYPES:
      return Object.assign({}, state, {
        loadingTeamTypes: true,
      });
    case actions.SUCCESS_LOAD_TEAM_TYPES:
      return Object.assign({}, state, {
        loadingTeamTypes: false,
        teamTypes: action.teamTypes,
      });
    case actions.FAIL_LOAD_TEAM_TYPES:
      return Object.assign({}, state, {
        loadingTeamTypes: false,
      });
    case actions.ATTEMPT_ADD_TEAM:
      return Object.assign({}, state, {
        addingTeam: true,
        teamAddError: null,
      });
    case actions.SUCCESS_ADD_TEAM:
      return Object.assign({}, state, {
        addingTeam: false,
      });
    case actions.FAIL_ADD_TEAM:
      return Object.assign({}, state, {
        addingTeam: false,
        teamAddError: action.error,
      });
    default:
      return state;
  }
}
