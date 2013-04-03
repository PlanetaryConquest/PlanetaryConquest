define([], function () {
  function View(superview, x, y, width, height) {
    this.subviews = [];
    this.superview = superview;
    this.xInSuperview = x;
    this.yInSuperview = y;
    this.width = width;
    this.height = height;
  }

  View.prototype.addSubview = function addSubview(view) {
    this.subviews.push(view);
  };

  View.prototype.removeFromSuperView = function removeFromSuperView() {
    this.superview.subviews.splice(this.superview.subviews.indexOf(this), 1);
  };

  View.prototype.paint = function paint(ctx, custom) {
    ctx.translate(this.xInSuperview, this.yInSuperview);
    custom.call(this, ctx);
    this.subviews.forEach(function (subview) {
      subview.paint(ctx);
    });
    ctx.translate(-this.xInSuperview, -this.yInSuperview);
  };

  View.prototype.getSuperview = function getSuperview() {
    return this.superview;
  };

  View.prototype.getXInSuperview = function getXInSuperview()  { return this.xInSuperview; };
  View.prototype.getYInSuperview = function getYInSuperview()  { return this.yInSuperview; };
  View.prototype.getWidth        = function getWidth()         { return this.width; };
  View.prototype.getHeight       = function getHeight()        { return this.height; };

  View.prototype.setXInSuperview = function setXInSuperview(x) { this.xInSuperview = x; };
  View.prototype.setYInSuperview = function setYInSuperview(y) { this.yInSuperview = y; };
  View.prototype.setWidth        = function setWidth(w)        { this.width        = w; };
  View.prototype.setHeight       = function setHeight(h)       { this.height       = h; };

  return View;
});