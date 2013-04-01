/*
 * Planet.h
 *
 *  Created on: Mar 31, 2013
 *      Author: adrusi
 */

#include <vector>
#include <string>
#include <memory>
#include "System.h"
#include "Entity.h"

#ifndef PLANET_H_
#define PLANET_H_

class Planet : public Entity {
private:
	std::vector<std::shared_ptr<System> > systems;
public:
	Planet();
	virtual ~Planet();

	void addSystem(std::shared_ptr<System>);
	std::string toString();
};

#endif /* PLANET_H_ */
