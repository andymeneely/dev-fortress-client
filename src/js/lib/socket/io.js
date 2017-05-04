const io = require('socket.io-client');

const BASE_URL = 'http://localhost:3000/';

const socket = io(`${BASE_URL}`);

socket.on('connect', () => {
  console.log(socket.id);
});

socket.on('info', (jsonData) => {
  console.log(jsonData);
});

module.exports = socket;
