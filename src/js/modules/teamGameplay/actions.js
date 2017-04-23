import * as api from 'lib/api';
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

export function successGameInfo(gameInfo) {
  return {
    type: actions.SUCCESS_GAME_INFO,
    gameInfo,
  };
}

export function failGameInfo(error) {
  return {
    type: actions.FAIL_TEAM_INFO,
    error,
  };
}

export function requestGameInfo(gameId) {
  return (dispatch, getState) => {
    const state = getState();
    const jwt = AuthModule.selectors.getJwt(state);
    dispatch({
      type: actions.REQUEST_GAME_INFO,
    });

    api.getGameById(gameId, jwt, undefined, (err, data) => {
      if (err) {
        return dispatch(failGameInfo(err));
      }
      return dispatch(successGameInfo(data));
    });
  };
}
