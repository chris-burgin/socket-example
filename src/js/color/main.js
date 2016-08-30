(function () {
  /** ******************/
  // main process
  /** ******************/
  const main = (function () {
    // requires
    const sockets = require('./modules/sockets')

    // start the main process
    const init = () => {
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
