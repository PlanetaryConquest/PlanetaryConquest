require ["game"], (game) ->
  canvas = document.createElement "canvas"
  document.body.appendChild canvas
  game.setCanvas canvas
  game.startGameLoop()
