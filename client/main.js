requirejs.config({
  baseUrl: "/"
});

requirejs(["client/game"], function (game) {
  var canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  game.setCanvas(canvas);
  game.startGameLoop();
});