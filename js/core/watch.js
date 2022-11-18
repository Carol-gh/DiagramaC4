'use strict'
const io = require('socket.io-client');
const socket = io.connect('localhost:8083');
console.log('socket cargado...');

module.exports =  {
    io,
    socket,
};