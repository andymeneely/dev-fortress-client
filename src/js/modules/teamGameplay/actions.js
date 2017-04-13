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
