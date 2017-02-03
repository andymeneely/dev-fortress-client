

import * as actions from './actionTypes';

export function incrementCounter() {
  return {
    type: actions.INCREMEMENT_COUNTER,
  };
}

export function decrementCounter() {
  return {
    type: actions.DECREMEMENT_COUNTER,
  };
}

export function resetCounter() {
  return {
    type: actions.RESET_COUNTER,
  };
}
