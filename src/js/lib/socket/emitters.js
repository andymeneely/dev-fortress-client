const socket = require('./io');

export function authenticateTeam(token) {
  socket.emit('authenticate_team', token);
}

export function authenticateStoryTeller(token) {
  socket.emit('authenticate_storyteller', token);
}

