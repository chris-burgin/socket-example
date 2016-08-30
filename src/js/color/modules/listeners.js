(function () {
  const listeners = (function () {
    // listening in a change of color
    const colorChange = (callback) => {
      $('body').on('change', '.colorInput', function(event){
        callback($(this).val());
      });
    }

    return {colorChange}
  }())

  module.exports = listeners
}())
