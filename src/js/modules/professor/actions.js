import * as actions from './actionTypes';

export function createGame() {
  return (dispatch) => {
    dispatch({
      type: actions.CREATE_GAME,
    });
  };
}
