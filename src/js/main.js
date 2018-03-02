'use strict';

/***********************
*
* REQUIRE ALL MODULES
*
************************/

// Custom modules
const TestModule = require('./modules/test-module');

/***********************
*
* INITIATE ALL MODULES
*
************************/
class Main {
	constructor() {
		this.initializeModules();
	}
	initializeModules() {
		new TestModule();
	}
}

new Main();
