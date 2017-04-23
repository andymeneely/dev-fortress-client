
import * as actions from './actionTypes';

const defaultState = {
  requestingTeamInfo: false,
  error: null,
  // team data
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
    default:
      return state;
  }
}
