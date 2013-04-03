define([], function () {
  function Frame(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  Frame.prototype.tick = function(elapsedTime) {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  };

  return Frame;
});