const socket = require('./io');

export function authenticateTeam(token) {
  socket.emit('authenticate_team', token);
}

export function authenticateStoryTeller(token) {
  socket.emit('authenticate_storyteller', token);
}

export function selectAction(actionId) {
  socket.emit('select_action', actionId);
}

export function deselectAction(actionId) {
  socket.emit('deselect_action', actionId);
}


