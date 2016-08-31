(function () {
  const listeners = (function () {
    // listening in a change of color
    const newMessage = (callback) => {
      $('body').on('keypress', '.message', function(event){
        // checks if key is enter
        if(parseInt(event.which) === 13) {
          // returns value of input
          callback($(this).val());
        }
      });
    }

    return {newMessage}
  }())

  module.exports = listeners
}())
