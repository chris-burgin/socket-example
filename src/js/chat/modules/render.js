(function () {
  const render = (function () {
    // clear an input
    const clearInput = (selector) => {
      $(`input${selector}`).val('');
    }

    // render new message
    const newMessage = (name, message, color) => {
      let html = `<li>
        <span class="name" style="color: ${color}"> ${name}: </span>
        <span class="message"> ${message} </span>
      </li>`
      $('.chat .window ul').append(html)
    }

    const scroll = () => {
      $('.window').animate({"scrollTop": $('.window')[0].scrollHeight}, "fast")
    }

    // fetch name
    const fetchInput = (selector) => {
      return $(`input${selector}`).val();
    }

    return {clearInput, newMessage, scroll, fetchInput}
  }())

  module.exports = render
}())
