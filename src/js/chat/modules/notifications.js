(function () {
  const notifications = (function () {
    // request notifications permissions
    const init = () => {
      Notification.requestPermission()
    }

    const send = (user, message) => {
      if (document.hasFocus() === false) {
        let notification = new Notification(`${user}: ${message}`);
      }
    }

    return {init, send}
  }())

  module.exports = notifications
}())
