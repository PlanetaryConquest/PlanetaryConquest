define [], ->
  class Frame
    constructor: (@canvas) ->
      @ctx = @canvas.getContext "2d"

    tick: (elapsedTime) ->
      @width  = @canvas.width  = window.innerWidth
      @height = @canvas.height = window.innerHeight
      @ctx.clearRect 0, 0, @canvas.width, @canvas.height
      @ctx.fillStyle = "red"
      @ctx.fillRect 0, 0, @canvas.width, @canvas.height