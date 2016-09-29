(function () {
  'use strict'

  // CLUSTER SETUP
  const cluster = require('cluster')

  if (cluster.isMaster) {
    // var cpuCount = require('os').cpus().length;
    // for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork()
    // }
  } else {
    // NPM MODULES
    const express = require('express')
    const bodyParser = require('body-parser')
    const path = require('path')

    // CUSTOM MODULES

    // SETUP EXPRESS
    const app = express()

    // SETUP STATIC DIRECTORY
    app.use(express.static(
      path.join(__dirname, '/public')
    ))

    // SETUP JADE
    app.set('view engine', 'jade')

    // body parser setup
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
      extended: true
    }))

    //* ****************
    // BASIC ROUTES
    //* ****************
    const chat = require('./routes/chat')

    // chat
    app.use('/', chat)

    //* ****************
    // SOCKETS
    //* ****************
    // import and start sockets
    const chatSocket = require('./sockets/chat').init();

    //* ****************
    // START APP
    //* ****************
    app.listen(process.env.PORT, function () {
      console.log('Listening on port ' + process.env.PORT)
    })
  }
}())
