/*
 * Game.cpp
 *
 *  Created on: Apr 1, 2013
 *      Author: adrusi
 */

#include "Game.h"
#include <unistd.h>

GameMap &Game::map() { return m_map; }

Game::Game(): m_map() {
	ticksSincePeriodic = 0;
	start_gameloop();
}

void Game::start_gameloop() {
	while (true) {
		continuous();
		usleep(17000);
	}
}

void Game::continuous() {
	ticksSincePeriodic++;
	if (ticksSincePeriodic > 2) {
		ticksSincePeriodic = 0;
		periodic();
	}
}

void Game::periodic() {
	m_map.periodic();
}
