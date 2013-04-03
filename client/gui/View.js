define([], function () {

  /**
   * A superclass for any graphical object
   * @param {View} superview The parent view, or undefined if there is no parent view.
   * @param {int} x          The position of the view relative to its parent's origin.
   * @param {int} y
   * @param {int} width
   * @param {int} height
   */
  function View(superview, x, y, width, height) {
    this.subviews = [];
    this.superview = superview;
    this.xInSuperview = x;
    this.yInSuperview = y;
    this.width = width;
    this.height = height;
  }

  /**
   * @param {View} view The new subview.
   * @api public
   */
  View.prototype.addSubview = function addSubview(view) {
    this.subviews.push(view);
  };

  /**
   * Remove the view from its parent.
   * @api public
   */
  View.prototype.removeFromSuperview = function removeFromSuperview() {
    this.superview.subviews.splice(this.superview.subviews.indexOf(this), 1);
  };

  /**
   * Paints the view's subviews, and optionally custom rendering code.
   * @param  {CanvasRenderingContext2D}         ctx
   * @param  {(CanvasRenderingContext2D) -> ()} custom An optional function to draw custom rendering code before the subviews.
   * @api public
   */
  View.prototype.paint = function paint(ctx, custom) {
    ctx.translate(this.xInSuperview, this.yInSuperview);
    if (typeof custom === "function") custom.call(this, ctx);
    this.subviews.forEach(function (subview) {
      subview.paint(ctx);
    });
    ctx.translate(-this.xInSuperview, -this.yInSuperview);
  };

  /**
   * @return {View}
   * @api public
   */
  View.prototype.getSuperview = function getSuperview() {
    return this.superview;
  };

  View.prototype.getXInSuperview = function getXInSuperview()  { return this.xInSuperview; };
  View.prototype.getYInSuperview = function getYInSuperview()  { return this.yInSuperview; };
  View.prototype.getWidth        = function getWidth()         { return this.width; };
  View.prototype.getHeight       = function getHeight()        { return this.height; };

  View.prototype.setXInSuperview = function setXInSuperview(x) { this.xInSuperview = Math.round(x); };
  View.prototype.setYInSuperview = function setYInSuperview(y) { this.yInSuperview = Math.round(y); };
  View.prototype.setWidth        = function setWidth(w)        { this.width        = Math.round(w); };
  View.prototype.setHeight       = function setHeight(h)       { this.height       = Math.round(h); };

  return View;
});