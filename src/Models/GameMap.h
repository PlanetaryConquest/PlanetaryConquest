/*
 * GameMap.h
 *
 *  Created on: Apr 1, 2013
 *      Author: adrusi
 */

#include <vector>
#include <memory>
#include "Entity.h"

#ifndef GAMEMAP_H_
#define GAMEMAP_H_

class GameMap {
private:
	std::vector<std::shared_ptr<Entity> > m_entities;
public:
	GameMap();
	virtual ~GameMap();

	void periodic();
};

#endif /* GAMEMAP_H_ */
