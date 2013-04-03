define(["client/gui/View"], function (View) {
  Extend(Toolbar, View);

  Toolbar.HEIGHT = 250;

  function Toolbar(superView) {
    Super(this)(superView, 0, superView.getHeight() - Toolbar.HEIGHT, superView.getWidth(), Toolbar.HEIGHT);
  }

  Toolbar.prototype.paint = function paint(ctx) {
    this.setWidth(this.getSuperview().getWidth());
    this.setYInSuperview(this.getSuperview().getHeight() - Toolbar.HEIGHT);
    Super(this, "paint")(ctx, function () {
      ctx.fillStyle = "blue";
      ctx.fillRect(0, 0, this.getWidth(), this.getHeight());
    });
  };

  return Toolbar;
});