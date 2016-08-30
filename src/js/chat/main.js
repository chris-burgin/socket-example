(function () {
  /** ******************/
  // main process
  /** ******************/
  const main = (function () {
    // requires
    const sockets = require('./modules/sockets')
    const notification = require('./modules/notifications')

    // start the main process
    const init = () => {
      notification.init();
      sockets.create();
    }

    return {init}
  }())

  // wait until page is loaded
  $(function () {
    // start the main process
    main.init()
  })
}())
