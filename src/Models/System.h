/*
 * System.h
 *
 *  Created on: Mar 31, 2013
 *      Author: adrusi
 */
#include <string>

#ifndef SYSTEM_H_
#define SYSTEM_H_

class System {
private:
	std::string name;
public:
	System(std::string name);
	virtual ~System();
};

#endif /* SYSTEM_H_ */
