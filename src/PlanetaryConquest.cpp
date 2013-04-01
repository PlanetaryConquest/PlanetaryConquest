#include <iostream>
#include <string>
#include <memory>
#include <stdlib.h>
#include "Models/Planet.h"
#include "Models/System.h"

int main(int argc, const char* argv[]) {
	using namespace std;
	auto p = Planet();
	auto s1 = make_shared<System>(System(string("foo")));
	auto s2 = make_shared<System>(System(string("bar")));
	p.addSystem(s1);
	p.addSystem(s2);
	int scale = 5;
	cout << ([&scale](int x) { return x * scale; })(2) << endl;
	return 0;
}
