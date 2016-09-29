(function () {
  const notifications = (function () {
    // request notifications permissions
    const init = () => {
      Notification.requestPermission()
    }

    const send = (user, message) => {
      if (document.hasFocus() === false) {
        var options = {
          body: `${user}: ${message}`,
          icon: "https://secure.gravatar.com/avatar/b623fa7b975d0bf0832cc2b727bc3297.jpg"
        }

        // let notification = new Notification("New Message!", options)
        new Notification("New Message!", options) // display notification
      }
    }

    return {init, send}
  }())

  module.exports = notifications
}())
