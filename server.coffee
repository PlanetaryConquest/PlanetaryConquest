require("source-map-support").install()

express = require "express"
app     = express()
server  = require("http").createServer app
io      = require("socket.io").listen server

app.use express.static "#{__dirname}/client"
app.use "/client", express.static "#{__dirname}/client" # hack to make source maps work
app.use express.logger()

server.listen process.env.PORT or 3000

io.sockets.on "connection", (socket) ->
  console.log "connection"