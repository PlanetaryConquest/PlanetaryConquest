define ["gui/Frame"], (Frame) ->
  frame         = undefined
  startTime     = 0
  tickListeners = []

  # Sets the canvas if the canvas has not already been set.
  # setCanvas :: (HTMLCanvasElement) -> ()
  setCanvas = (newCanvas) -> frame = new Frame newCanvas unless canvas?

  tick = ->
    window.requestAnimationFrame tick
    elapsedTime = Date.now() - startTime
    listener elapsedTime for listener in tickListeners
    frame.tick elapsedTime

  startGameLoop = ->
    startTime = Date.now()
    tick()

  addTickListener = (listener) ->
    tickListeners.push listener

  getFrame = -> frame

  {setCanvas, startGameLoop, addTickListener, getFrame}