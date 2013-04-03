if (window) window.global = window;
else global.window = global;

global.Super = function Super(context, method) {
  if (!context.constructor.__super__) throw new Error("context of Super did not declare a superclass");
  if (!method) return context.constructor.__super__.bind(context);
  if (typeof context.constructor.__super__.prototype[method] !== "function") throw new Error("method `" + method + "' of superclass not found.");
  return context.constructor.__super__.prototype[method].bind(context);
};

global.Extend = function Extend(sub, _super) {
  if (typeof sub !== "function" || typeof _super !== "function") throw new Error("Invalid application of `Extend'.");
  sub.__super__ = _super;
  sub.prototype = Object.create(_super.prototype);
  sub.prototype.constructor = sub;
}