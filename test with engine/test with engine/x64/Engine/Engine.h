#ifndef TEST_ENGINE
#define TEST_ENGINE


#include "GLFW/glfw3.h"
#pragma comment(lib, "opengl32.lib")

class Engine {
public:
	static int SCREEN_WIDTH;
	static int SCREEN_HEIGHT;


	Engine();
	~Engine();

	bool Initialize(char windowtitle);

private:



};






#endif
