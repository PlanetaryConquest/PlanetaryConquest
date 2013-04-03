define(["client/models/Planet"], function (Planet) {
  var instance;

  GameMap.getInstance = function getInstance() {
    if (instance) return instance;
    instance = new GameMap();
    return instance;
  };

  function GameMap() {
    if (instance) throw new Error("reinitializing singleton");
    this.planets = [];
    this.generatePlanets();
  }

  /**
   * Place planets on the map.
   * @api private
   */
  GameMap.prototype.generatePlanets = function generatePlanets() {
    for (var i = 0; i < 10; i++) {
      this.planets.push(new Planet(Math.random(), Math.random()));
    }
  };

  /**
   * The number of planets on the map.
   * @api public
   * @return {int}
   */
  GameMap.prototype.planetCount = function planetCount() {
    return this.planets.length;
  };

  /**
   * The planet at specified index. The order of planets is arbitrary.
   * @api public
   * @return {Planet}
   */
  GameMap.prototype.planet = function planet(x) {
    return this.planets[x];
  };

  /**
   * Update the state of the map.
   * @param {int} elapsedTime The time since the start of the game in milliseconds.
   */
  GameMap.prototype.tick = function tick(elapsedTime) {
    planets.forEach(function (planet) {
      planet.tick(elapsedTime);
    });
  };

  return GameMap;
});