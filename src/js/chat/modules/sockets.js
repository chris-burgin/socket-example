(function () {
  // create socket connection
  const socket = io.connect('http://localhost:4001/chat');

  const sockets = (function () {
    // send
    const send = (data) => {
      socket.emit('chat-message', data);
    };

    // listen
    const listen = (callback) => {
      // resond to color change switch
      socket.on('chat-message', function (data) {
        callback(data);
      });
    };

    return {send, listen,}
  }())

  module.exports = sockets
}())
