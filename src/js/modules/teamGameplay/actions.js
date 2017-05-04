import * as api from 'lib/api';
import { authenticateTeam } from 'lib/socket/emitters';
import AuthModule from 'modules/authentication';
import * as actions from './actionTypes';

function successTeamInfo(teamInfo) {
  return {
    type: actions.SUCCESS_TEAM_INFO,
    teamInfo,
  };
}

function failTeamInfo(error) {
  return {
    type: actions.FAIL_TEAM_INFO,
    error,
  };
}


export function requestTeamInfo(teamId) {
  return (dispatch, getState) => {
    const state = getState();
    const jwt = AuthModule.selectors.getJwt(state);
    dispatch({
      type: actions.REQUEST_TEAM_INFO,
    });
    api.getTeamById(teamId, jwt, (err, data) => {
      if (err) {
        return dispatch(failTeamInfo(err));
      }

      return dispatch(successTeamInfo(data));
    });
  };
}

export function tryAuthTeamSocket() {
  return (dispatch, getState) => {
    const state = getState();
    const jwt = AuthModule.selectors.getJwt(state);

    authenticateTeam(jwt);

    return dispatch({
      type: actions.TRY_AUTH_TEAM_SOCKET,
    });
  };
}

export function successAuthTeamsocket() {
  return {
    type: actions.SUCCESS_AUTH_TEAM_SOCKET,

  };
}

export function socketJoinRoom() {
  return {
    type: actions.SOCKET_JOIN_ROOM,
  };
}

