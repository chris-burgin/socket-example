(function () {
  'use strict'

  // EXPRESS
  const express = require('express')
  const router = express.Router()

  router.get('/', function (req, res) {
    res.render('color/index')
  })

  module.exports = router
}())
