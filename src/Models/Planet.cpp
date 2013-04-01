/*
 * Planet.cpp
 *
 *  Created on: Mar 31, 2013
 *      Author: adrusi
 */

#include "Planet.h"

using namespace std;

Planet::Planet() : systems () {}

Planet::~Planet() {}

void Planet::addSystem(shared_ptr<System> s) {
	systems.push_back(s);
}
