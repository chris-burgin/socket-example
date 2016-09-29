(function () {
  'use strict'

  // EXPRESS
  const express = require('express')
  const app = express()
  const io = require('socket.io').listen(app.listen(4001));

  const color = (function () {
    const init = () => {
      // color changing socket
      io.of('/chat').on('connection', function (socket) {
        // listen for a change in color
        socket.on('chat-message', function (data) {
          // emit color change to all clients
          socket.broadcast.emit('chat-message', data);
        });
      });
    }

    return {init}
  }())

  module.exports = color
}())
