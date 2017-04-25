
import * as actions from './actionTypes';

const defaultState = {
  error: null,
  // static data
  requestingTeamTypes: false,
  teamTypeIndex: null,
  teamTypeError: null,
  requestingActions: false,
  actionsIndex: null,
  actionsError: null,
  // team data
  requestingTeamInfo: false,
  teamName: null,
  teamMature: null,
  teamResources: null,
  teamMindset: null,
  teamTypeId: null,
  teamGameId: null,
  // game data
  requestingGameInfo: false,
  gameInfoError: null,
  gameName: null,
  currentRound: null,
};


export default function (state = defaultState, action) {
  switch (action.type) {
    case actions.SUCCESS_TEAM_INFO:
      return Object.assign({}, state, {
        requestingTeamInfo: false,
        error: null,
        teamName: action.teamInfo.name,
        teamMature: action.teamInfo.mature,
        teamResources: action.teamInfo.resources,
        teamMindset: action.teamInfo.mindset,
        teamTypeId: action.teamInfo.teamtype_id,
        teamGameId: action.teamInfo.game_id,
      });
    case actions.FAIL_TEAM_INFO:
      return Object.assign({}, state, {
        requestingTeamInfo: false,
        error: action.error,
      });
    case actions.REQUEST_TEAM_INFO:
      return Object.assign({}, state, {
        requestingTeamInfo: true,
      });
    case actions.SUCCESS_GAME_INFO:
      return Object.assign({}, state, {
        requestingGameInfo: false,
        gameInfoError: null,
        gameName: action.gameInfo.name,
        currentRound: action.gameInfo.current_round,
      });
    case actions.FAIL_GAME_INFO:
      return Object.assign({}, state, {
        requestingGameInfo: false,
        gameInfoError: action.error,
      });
    case actions.REQUEST_GAME_INFO:
      return Object.assign({}, state, {
        requestingGameInfo: true,
      });
    case actions.SUCCESS_TEAM_TYPES:
      return Object.assign({}, state, {
        requestingTeamTypes: false,
        teamTypeError: null,
        teamTypeIndex: action.teamTypes.reduce(
          (acc, curr) =>
            Object.assign({}, acc, {
              [curr.id]: curr,
            }), {}),
      });
    case actions.FAIL_TEAM_TYPES:
      return Object.assign({}, state, {
        requestingTeamTypes: false,
        teamTypeError: action.error,
      });
    case actions.REQUEST_TEAM_TYPES:
      return Object.assign({}, state, {
        requestingTeamTypes: true,
      });
    case actions.REQUEST_ACTIONS:
      return Object.assign({}, state, {
        requestingActions: true,
        actionsError: null,
      });
    case actions.SUCCESS_ACTIONS:
      return Object.assign({}, state, {
        requestingActions: false,
        actionsError: null,
        actionsIndex: action.actions.reduce(
          (acc, curr) =>
            Object.assign({}, acc, {
              [curr.id]: curr,
            }),
        {}),
      });
    case actions.FAIL_ACTIONS:
      return Object.assign({}, state, {
        requestingActions: false,
        actionsError: action.error,
      });
    default:
      return state;
  }
}
