require("source-map-support").install()

express = require "express"
app = express()

app.use express.static "#{__dirname}/client"
app.use "/client", express.static "#{__dirname}/client"
app.use express.logger()

app.listen process.env.PORT or 3000