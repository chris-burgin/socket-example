(function () {
  /** ******************/
  // main process
  /** ******************/
  const main = (function () {
    // requires
    const render = require('./modules/render');

    // start the main process
    const init = () => {
      render.init(); // react render, including sockets
    }

    return {init}
  }())

  // wait until page is loaded
  $(function () {
    // start the main process
    main.init()
  })
}())
