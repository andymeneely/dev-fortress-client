import socket from 'lib/socket/io';
import * as actions from './actions';
import Store from '../../store';

function handleInfo(event) {
  switch (event.event) {
    case 'authenticate_team':
      Store.dispatch(actions.successAuthTeamSocket());
      break;
    default:
      break;
  }
}

function handleDisconnect() {
  console.log('Disconnected!');
}

function handleSelectedActionsUpdate(teamActionSelections) {
  Store.dispatch(actions.selectedActionsUpdate(teamActionSelections));
}

const eventMap = {
  info: handleInfo,
  disconnect: handleDisconnect,
  selected_actions_update: handleSelectedActionsUpdate,
};


// export functions for binding/unbinding the handlers
export function bindHandlers() {
  Object.keys(eventMap).forEach(k => socket.on(k, eventMap[k]));
}
export function unbindHandlers() {
  Object.keys(eventMap).forEach(k => socket.removeListener(k, eventMap[k]));
}
