(function () {
  /** ******************/
  // main process
  /** ******************/
  const main = (function () {
    // requires
    const render = require("./modules/render")

    // start the main process
    const init = () => {
      render.init() // react render, including sockets
    }

    return {init}
  }())

  // get this party started
  main.init()
}())
