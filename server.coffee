requirejs = require "requirejs"
requirejs.config nodeRequire: require

requirejs ["source-map-support", "express", "http", "socket.io"], (sms, express, http, socketio) ->
  sms.install()

  app     = express()
  server  = http.createServer app
  io      = socketio.listen server

  app.use "/client", express.static "#{__dirname}/client"
  app.use "/common", express.static "#{__dirname}/common"

  app.use express.logger()

  app.get "/", (req, res) ->
    res.redirect "/client"

  server.listen process.env.PORT or 3000

  io.sockets.on "connection", (socket) ->
    console.log "connection"