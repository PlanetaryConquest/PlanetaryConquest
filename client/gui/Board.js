define(["client/gui/Toolbar", "client/models/GameMap", "client/gui/View", "client/gui/PlanetView"], function (Toolbar, GameMap, View, PlanetView) {
  Extend(Board, View);

  /**
   * The part of the gui which shows the actual game pieces, like planets.
   */
  function Board(superView) {
    Super(this)(superView, 0, 0, superView.getWidth(), superView.getHeight() - Toolbar.HEIGHT);
    this.model = GameMap.getInstance();
    this.viewportWidth = 1;
    this.viewportHeight = 1;
    this.viewportX = 0;
    this.viewportY = 0;
    for (var i = 0; i < this.model.planetCount(); i++) {
      this.addSubview(new PlanetView(this, this.model.planet(i)));
    }
  }

  Board.prototype.paint = function paint(ctx) {
    this.setWidth(this.getSuperview().getWidth());
    this.setHeight(this.getSuperview().getHeight() - Toolbar.HEIGHT);
    Super(this, "paint")(ctx, function () {
      ctx.fillStyle = "green";
      ctx.fillRect(0, 0, this.getWidth(), this.getHeight());
    });
  };

  /**
   * The fraction of the GameMap that should be displayed on the Board. Aspect ratio is garaunteed to be consistent.
   */
  Board.prototype.getViewportWidth  = function getViewportWidth()  { return this.viewportWidth; };
  Board.prototype.getViewportHeight = function getViewportHeight() { return this.viewportHeight; };

  /**
   * The point on the GameMap that the top-left corner of the board corresponds to.
   */
  Board.prototype.getViewportX = function getViewportX() { return this.viewportX; };
  Board.prototype.getViewportY = function getViewportY() { return this.viewportY; };

  return Board;
});