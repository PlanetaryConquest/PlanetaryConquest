define(["client/gui/Board", "client/gui/Toolbar", "client/gui/View"], function (Board, Toolbar, View) {
  Extend(Frame, View);

  var instance;

  Frame.getInstance = function getInstance(canvas) {
    if (instance) return instance;
    instance = new Frame(canvas);
    return instance;
  };

  function Frame(canvas) {
    if (instance) throw new Error("reinitializing singleton");
    Super(this)(undefined, 0, 0, window.innerWidth, window.innerHeight);
    this.canvas = canvas;
    this.ctx    = this.canvas.getContext("2d");
    this.addSubview(new Board(this));
    this.addSubview(new Toolbar(this));
  }

  Frame.prototype.tick = function tick(elapsedTime) {
    this.setWidth (this.canvas.width  = window.innerWidth);
    this.setHeight(this.canvas.height = window.innerHeight);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.paint(this.ctx);
  };

  Frame.prototype.paint = function paint(ctx) {
    Super(this, "paint")(ctx, function () {
      ctx.fillStyle = "red";
      ctx.fillRect(0, 0, this.getWidth(), this.getHeight());
    });
  };

  return Frame;
});