

import {
    INCREMEMENT_COUNTER,
    DECREMEMENT_COUNTER,
    RESET_COUNTER,
} from './actionTypes';

const defaultState = {
  addClicks: 0,
  subtractClicks: 0,
  counterValue: 0,
};


export default function (state = defaultState, action) {
  switch (action.type) {
    case INCREMEMENT_COUNTER:
      return Object.assign({}, state, {
        addClicks: state.addClicks + 1,
        counterValue: state.counterValue + 1,
      });
    case DECREMEMENT_COUNTER:
      return Object.assign({}, state, {
        subtractClicks: state.subtractClicks + 1,
        counterValue: state.counterValue - 1,
      });
    case RESET_COUNTER:
      return Object.assign({}, state, {
        addClicks: 0,
        subtractClicks: 0,
        counterValue: 0,
      });
    default:
      return state;
  }
}
