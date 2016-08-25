(function () {
  const render = (function () {
    // listening in a change of color
    const backgroundColor = (color) => {
      $('body').css('background-color', color);
    }

    const colorInput = (color) => {
      $('.colorInput').val(color);
    }

    return {backgroundColor, colorInput}
  }())

  module.exports = render
}())
