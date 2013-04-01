/*
 * Game.h
 *
 *  Created on: Apr 1, 2013
 *      Author: adrusi
 */

#include "Models/GameMap.h"

#ifndef GAME_H_
#define GAME_H_

/*
 * Singleton which runs the game loop and makes various global game objects available
 */
class Game {
private:
	GameMap m_map;
public:
	static Game &getInstance() {
		static Game instance;
		return instance;
	}
	GameMap &map();
private:
	int ticksSincePeriodic;
	void start_gameloop();
	void continuous();
	void periodic();

	Game();
	Game(Game const &);
	void operator=(Game const &);
};

#endif /* GAME_H_ */
