
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
  socketAuthed: false,
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
    case actions.SUCCESS_AUTH_TEAM_SOCKET:
      return Object.assign({}, state, {
        socketAuthed: true,
      });
    default:
      return state;
  }
}
