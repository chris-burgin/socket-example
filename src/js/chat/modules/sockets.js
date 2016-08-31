(function () {
  // modules
  const listeners = require('./listeners');
  const render = require('./render');
  const notifications = require('./notifications');

  const sockets = (function () {
    // create all sockets
    const create = () => {
      chatSocket();
    }

    // socket for listening to colors

    const chatSocket = () => {
      // create socket
      const socket = io.connect('http://10.200.230.71:4001/chat');

      // resond to color change switch
      socket.on('chat-message', function (data) {
        // render message
        render.newMessage(
          data.name,
          data.message,
          data.color
        );

        // scroll to bottom
        render.scroll();

        // os notification
        notifications.send(data.name, data.message);
      });

      // listening for a new message
      listeners.newMessage(function(message){

        // clear input
        render.clearInput('.message');

        // render message
        render.newMessage(
          render.fetchInput('.name'),
          message,
          render.fetchInput('.color')
        );

        // send message
        socket.emit('chat-message', {
          name: render.fetchInput('.name'),
          message: message,
          color: render.fetchInput('.color')
        });

        render.scroll();
      });
    }

    return {create}
  }())

  module.exports = sockets
}())
