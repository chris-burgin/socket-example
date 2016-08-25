(function () {
  'use strict'

  // EXPRESS
  const express = require('express')
  const app = express()
  const io = require('socket.io').listen(app.listen(4000));

  const color = (function () {
    const init = () => {
      // color changing socket
      io.of('/color').on('connection', function (socket) {
        // listen for a change in color
        socket.on('switch-color', function (data) {
          // emit color change to all clients
          socket.broadcast.emit('switch-color', { color: data.color });
        });
      });
    }

    return {init}
  }())

  module.exports = color
}())
