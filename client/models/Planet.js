define([], function () {
  function Planet(x, y) {
    this.x = x;
    this.y = y;
  }

  Planet.prototype.getX = function getX() {
    return this.x;
  };

  Planet.prototype.getY = function getY() {
    return this.y;
  };

  return Planet;
});