(function () {
  /** ******************/
  // main process
  /** ******************/
  const main = (function () {
    // requires
    const notification = require('./modules/notifications')
    const render = require('./modules/render');

    // start the main process
    const init = () => {
      render.init(); // react render, including sockets
      notification.init(); // init notifications
    }

    return {init}
  }())

  // wait until page is loaded
  $(function () {
    // start the main process
    main.init()
  })
}())
