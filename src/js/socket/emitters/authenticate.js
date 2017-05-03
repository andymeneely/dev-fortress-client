const socket = require('../io');

function authenticateTeam(token) {
  socket.emit('authenticate_team', token);
}

function authenticateStoryTeller(token) {
  socket.emit('authenticate_storyteller', token);
}

module.exports = { authenticateTeam, authenticateStoryTeller };
