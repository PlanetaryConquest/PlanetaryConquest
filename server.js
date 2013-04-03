requirejs = require("requirejs");

requirejs.config({
  nodeRequire: require
});

requirejs(["express", "http", "socket.io"], function (express, http, socketio) {
  var app = express();
  var server = http.createServer(app);
  var io = socketio.listen(server);

  app.use("/client", express.static(__dirname + "/client"));
  app.use("/common", express.static(__dirname + "/common"));
  app.use(express.logger());

  app.get("/", function(req, res) {
    res.redirect("/client");
  });

  server.listen(process.env.PORT || 3000);

  io.sockets.on("connection", function (socket) {
    console.log("connection");
  });
});