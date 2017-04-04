import { browserHistory } from 'react-router';
import AuthModule from 'modules/authentication';
import {
  createGame,
  getGamesForUser,
  getGameById,
  getTeamTypes
} from 'lib/api';
import * as actions from './actionTypes';

function failCreateGame(error) {
  return {
    type: actions.FAIL_CREATE_GAME,
    error,
  };
}

function successCreateGame(gameData) {
  browserHistory.push(`/professor/game/${gameData.id}`);
  return {
    type: actions.SUCCESS_CREATE_GAME,
    gameData,
  };
}

export function attemptCreateGame(gameName, numRounds) {
  return (dispatch, getState) => {
    const state = getState();

    dispatch({
      type: actions.ATTEMPT_CREATE_GAME,
      gameName,
      numRounds,
    });

    const token = AuthModule.selectors.getJwt(state);

    createGame(gameName, numRounds, token, (err, data) => {
      if (err) {
        dispatch(failCreateGame(err));
      } else {
        dispatch(successCreateGame(data));
      }
    });
  };
}

function failLoadMyGames(error) {
  return {
    type: actions.FAIL_LOAD_MY_GAMES,
    error,
  };
}

function successLoadMyGames(games) {
  return {
    type: actions.SUCCESS_LOAD_MY_GAMES,
    games,
  };
}

export function attemptLoadMyGames() {
  return (dispatch, getState) => {
    const state = getState();

    const token = AuthModule.selectors.getJwt(state);
    const userId = AuthModule.selectors.decodeJwt(state).id;

    dispatch({
      type: actions.ATTEMPT_LOAD_MY_GAMES,
    });

    getGamesForUser(userId, token, (err, data) => {
      if (err) {
        return dispatch(failLoadMyGames(err));
      }
      return dispatch(successLoadMyGames(data));
    });
  };
}

function failLoadGame(error) {
  return {
    type: actions.FAIL_LOAD_GAME,
    error,
  };
}

function successLoadGame(gameData) {
  return {
    type: actions.SUCCESS_LOAD_GAME,
    gameData,
  };
}


export function attemptLoadGame(gameId) {
  return (dispatch, getState) => {
    const state = getState();

    const token = AuthModule.selectors.getJwt(state);

    dispatch({
      type: actions.ATTEMPT_LOAD_GAME,
    });

    getGameById(gameId, token, (err, data) => {
      if (err) {
        return dispatch(failLoadGame(err));
      }
      return dispatch(successLoadGame(data));
    });
  };
}

function failLoadTeamTypes(error) {
  return {
    type: actions.FAIL_LOAD_TEAM_TYPES,
    error,
  };
}

function successLoadTeamTypes(teamTypes) {
  return {
    type: actions.SUCCESS_LOAD_TEAM_TYPES,
    teamTypes,
  };
}

export function attemptLoadTeamTypes() {
  return (dispatch, getState) => {
    const state = getState();

    const token = AuthModule.selectors.getJwt(state);

    dispatch({
      type: actions.ATTEMPT_LOAD_TEAM_TYPES,
    });

    getTeamTypes(token, (err, data) => {
      if (err) {
        return dispatch(failLoadTeamTypes(err));
      }
      return dispatch(successLoadTeamTypes(data));
    });
  };
}

