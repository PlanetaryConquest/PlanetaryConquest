define(["client/gui/View"], function (View) {
  Extend(PlanetView, View);

  PlanetView.RADIUS = 50;
  PlanetView.DEBUG = false;

  function PlanetView(superview, planet) {
    if (!superview.getViewportWidth || !superview.getViewportX) throw new Error("the superview for a PlanetView should be a Board");
    this.model = planet;
    Super(this)(superview, 0, 0, PlanetView.RADIUS * 2, PlanetView.RADIUS * 2);
    this.recalcPosition();
  }

  PlanetView.prototype.paint = function paint(ctx) {
    this.recalcPosition();
    Super(this, "paint")(ctx, function () {
      ctx.beginPath();
      ctx.arc(
        PlanetView.RADIUS,
        PlanetView.RADIUS,
        PlanetView.RADIUS,
        2 * Math.PI,
        false);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.fillStyle = "white";
      if (PlanetView.DEBUG) ctx.fillText("(" + this.model.getX() + ", " + this.model.getY() + ")", 0, 0);
    });
  };

  PlanetView.prototype.recalcPosition = function recalcPosition() {
    this.setXInSuperview((this.model.getX() - this.getSuperview().getViewportX()) / this.getSuperview().getViewportWidth() * this.getSuperview().getWidth() - PlanetView.RADIUS);
    this.setYInSuperview((this.model.getY() - this.getSuperview().getViewportY()) / this.getSuperview().getViewportHeight() * this.getSuperview().getHeight() - PlanetView.RADIUS);
  };

  return PlanetView;
});