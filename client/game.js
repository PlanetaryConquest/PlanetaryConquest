define(["client/gui/Frame", "client/models/GameMap"], function (Frame, GameMap) {
  var frame;
  var map;
  var startTime;
  var tickListeners = [];

  function setCanvas(newCanvas) {
    if (!frame) frame = Frame.getInstance(newCanvas);
  }

  function tick() {
    window.requestAnimationFrame(tick);
    var elapsedTime = Date.now() - startTime;
    tickListeners.forEach(function (listener) {
      listener.tick(elapsedTime);
    });
    frame.tick(elapsedTime); // the frame isn't a tickListener because it MUST be the last to be ticked.
  }

  function startGameLoop() {
    map = GameMap.getInstance();
    startTime = Date.now();
    tick();
  }

  function addTickListener(listener) {
    tickListeners.push(listener);
  }

  function getFrame() {
    return frame;
  }

  return {
    setCanvas: setCanvas,
    startGameLoop: startGameLoop,
    addTickListener: addTickListener,
    getFrame: getFrame
  };
});