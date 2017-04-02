import AuthModule from 'modules/authentication';
import { createGame, getGamesForUser } from 'lib/api';
import * as actions from './actionTypes';
import { browserHistory } from 'react-router';

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
