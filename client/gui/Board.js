define(["client/gui/Toolbar", "client/models/GameMap", "client/gui/View"], function (Toolbar, GameMap, View) {
  Extend(Board, View);

  /**
   * The part of the gui which shows the actual game pieces, like planets.
   */
  function Board(superView) {
    Super(this)(superView, 0, 0, superView.getWidth(), superView.getHeight() - Toolbar.HEIGHT);
    this.model = GameMap.getInstance();
  }

  Board.prototype.paint = function paint(ctx) {
    this.setWidth(this.getSuperview().getWidth());
    this.setHeight(this.getSuperview().getHeight() - Toolbar.HEIGHT);
    Super(this, "paint")(ctx, function () {
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, this.getWidth(), this.getHeight());
    });
  };

  return Board;
});