(function () {
  // modules
  const listeners = require('./listeners');
  const render = require('./render');

  const sockets = (function () {
    // create all sockets
    const create = () => {
      colorSocket();
    }

    // socket for listening to colors
    const colorSocket = () => {
      // create socket
      const socket = io.connect('http://localhost:4000/color');

      // resond to color change switch
      socket.on('switch-color', function (data) {

        // render the new background color
        render.backgroundColor(data.color);

        // update the input
        render.colorInput(data.color);
      });

      // listening for color to change
      listeners.colorChange(function(color){

        // emit color change event
        socket.emit('switch-color', {color: color});

        // update background color
        render.backgroundColor(color);
      });
    }

    return {create}
  }())

  module.exports = sockets
}())
