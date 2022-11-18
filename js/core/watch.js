'use strict'
const io = require('socket.io-client');
const socket = io.connect('http://54.91.43.203:9090');
console.log('socket cargado...');

module.exports =  {
    io,
    socket,
};