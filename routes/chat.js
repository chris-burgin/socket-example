(function () {
  'use strict'

  // EXPRESS
  const express = require('express')
  const router = express.Router()

  router.get('/', function (req, res) {
    res.render('chat/index')
  })

  module.exports = router
}())
