define(["client/gui/Frame"], function (Frame) {
  var frame;
  var startTime;
  var tickListeners = [];

  function setCanvas(newCanvas) {
    if (!frame) frame = new Frame(newCanvas);
  }

  function tick() {
    window.requestAnimationFrame(tick);
    var elapsedTime = Date.now() - startTime;
    tickListeners.forEach(function (listener) {
      listener(elapsedTime);
    });
    frame.tick(elapsedTime);
  }

  function startGameLoop() {
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