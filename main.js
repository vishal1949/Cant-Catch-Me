/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Ghost = __webpack_require__(/*! ./ghosts */ \"./src/ghosts.js\");\nconst ctx = document.getElementById(\"game-canvas\").getContext('2d');\nconst Laser = __webpack_require__(/*! ./laser */ \"./src/laser.js\");\n\nclass Game {\n    constructor(){\n        this.startWidth = 0;\n        this.startHeight = 0;\n        this.width = 800;\n        this.height = 500;\n        this.dimensions = {\n            startWidth: this.startWidth+3, //3\n            startHeight: this.startHeight+3, //3\n            maxWidth: this.width-28, //772\n            maxHeight: this.height-18, //482\n        }\n        this.winner = null;\n\n        let g = new Ghost(this.dimensions);\n        let g2 = new Ghost(this.dimensions);\n        let g3 = new Ghost(this.dimensions);\n\n        let laser = new Laser('vertical', ctx);\n        let laser2 = new Laser('horizontal', ctx); //horizontal\n\n        this.ghosts = [g, g2, g3];\n        this.lasers = [laser, laser2];\n\n        this.drawGhost = this.drawGhost.bind(this);\n        this.drawLaser = this.drawLaser.bind(this);\n        this.gameOver = this.gameOver.bind(this);\n        this.areaCalculator = this.areaCalculator.bind(this);\n        this.locateGhost = this.locateGhost.bind(this);\n        this.wait = this.wait.bind(this);\n\n        this.drawGhost(this.ghosts);\n        \n    }\n\n    locateGhost(){\n        for(let i = 0; i < this.ghosts.length; i++){\n            if (this.ghosts[i].xpos >= this.dimensions.maxWidth - 10|| this.ghosts[i].ypos >= this.dimensions.maxHeight - 10) {\n                this.ghosts[i].xpos = 1000;\n                this.ghosts[i].xpos = 1000;\n            }\n        }\n    }\n\n    areaCalculator(){\n        let area;\n        area = this.dimensions.maxHeight * this.dimensions.maxWidth;\n        return area;\n    }\n\n    gameOver(){\n        let area = this.areaCalculator();\n        if(\n            (this.ghosts[0].xpos >= 950 || this.ghosts[0].ypos >= 950) &&\n            (this.ghosts[1].xpos >= 950 || this.ghosts[1].ypos >= 950) &&\n            (this.ghosts[2].xpos >= 950 || this.ghosts[2].ypos >= 950)\n        ){\n            alert(`YOU LOSE! Better luck next time. Your score is ${this.areaCalculator()}`);\n            this.winner = false;\n        }\n        if(area < 15000){\n            this.wait(2000);\n            alert(`YOU WIN! Your score is ${this.areaCalculator()}`);\n            this.winner = true;\n        } \n    }\n\n    wait(time) { //in seconds\n        var start = new Date().getTime();\n        var end = start;\n        while (end < start + time) {\n            end = new Date().getTime();\n        }\n    }   \n\n    drawGhost(ghostArray) {\n        if (this.winner === true || this.winner === false) return null;\n        requestAnimationFrame(() => {\n            ctx.clearRect(this.startWidth, this.startHeight, this.width, this.height);\n            this.drawGhost(ghostArray);\n            this.drawLaser(this.lasers);\n            if (this.lasers[0].laserArray.length > 0) this.lasers[0].drawLaser();\n            if (this.lasers[1].laserArray.length > 0) this.lasers[1].drawLaser();\n            this.gameOver();\n            this.locateGhost();\n            for(let i = 0; i < this.ghosts.length; i++){\n                if (this.ghosts[i].xpos >= this.dimensions.maxWidth || this.ghosts[i].ypos >= this.dimensions.maxHeight){\n                    this.ghosts[i].xpos = 1000;\n                    this.ghosts[i].xpos = 1000;\n                }\n            }\n            \n        });\n        for (let i = 0; i < ghostArray.length; i++) {\n            ctx.drawImage(ghostArray[i].icon, ghostArray[i].xpos, ghostArray[i].ypos, ghostArray[i].radius, ghostArray[i].radius )\n            ghostArray[i].moveDirection();\n            ghostArray[i].dimensions = this.dimensions;\n        }\n    }\n\n    drawLaser(lasers){\n        for (let i = 0; i < lasers.length; i++) {\n            ctx.drawImage(lasers[i].icon, lasers[i].xpos, lasers[i].ypos, 55, 40)\n            lasers[i].move();\n            let laserDirection = lasers[i].whichLaserShoots();\n            if (laserDirection === 'vertical'){\n                let newDimension = lasers[0].laserArray[lasers[0].laserArray.length - 1].returnValues();\n                if (this.dimensions.maxHeight > newDimension.maxHeight) {\n                    this.dimensions.maxHeight = newDimension.maxHeight+20;\n                }\n            } else if(laserDirection === 'horizontal'){\n                let newDimension;\n                if (lasers[1].laserArray[lasers[1].laserArray.length - 1] !== undefined){\n                    newDimension = lasers[1].laserArray[lasers[1].laserArray.length - 1].returnValues();\n                    if (this.dimensions.maxWidth > newDimension.maxWidth) {\n                        this.dimensions.maxWidth = newDimension.maxWidth+25;\n                    }\n                }\n            }\n        }\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/ghosts.js":
/*!***********************!*\
  !*** ./src/ghosts.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function getRandomInt(max) {\n    return Math.floor(Math.random() * Math.floor(max)) + 1;\n}\n\nclass Ghost {\n    constructor(dimensions){\n        this.icon = new Image();\n        this.icon.src = \"img/ghost.jpg\";\n        this.xpos = getRandomInt(650);\n        this.ypos = getRandomInt(450);\n        this.dimensions = dimensions;\n        // this.velX = getRandomInt(10);\n        // this.velY = getRandomInt(-10)\n        let v = getRandomInt(3)\n        if(v === 2){\n            this.velX = 7\n            this.velY = -7;\n        }else if(v === 1){\n            this.velX = -8;\n            this.velY = 9;\n        }else{\n            this.velX = -9;\n            this.velY = -10;\n        }\n        let r = getRandomInt(3);\n        if(r === 1){\n            this.radius = 20;\n        }else if(r === 2){\n            this.radius = 35;\n        }else{\n            this.radius = 50;\n        }\n        this.ctx = document.getElementById(\"game-canvas\").getContext('2d');\n        this.moveDirection = this.moveDirection.bind(this);\n    }\n    \n    moveDirection() {\n        this.xpos += this.velX;\n        this.ypos += this.velY;\n        if((this.xpos + this.radius) > this.dimensions.maxWidth || this.xpos < this.dimensions.startWidth){\n            this.velX *= -1;\n        }\n        if((this.ypos + this.radius) > this.dimensions.maxHeight || this.ypos < this.dimensions.startHeight){\n            this.velY *= -1;\n        }\n    }\n}\n\nmodule.exports = Ghost;\n\n\n \n\n//# sourceURL=webpack:///./src/ghosts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import _ from 'lodash';\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    window.keysdown = {};\n    new Game();\n    addEventListener(\"keydown\", function (e) { keysdown[e.keyCode] = true })\n    addEventListener(\"keyup\", function (e) { delete keysdown[e.keyCode] })\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/laser.js":
/*!**********************!*\
  !*** ./src/laser.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Line = __webpack_require__(/*! ./line */ \"./src/line.js\")\n\nclass Laser {\n    constructor(direction, ctx){\n        this.ctx = ctx;\n        this.icon = new Image();\n        this.line = [];\n        this.laserArray = [];\n        if(direction === 'vertical'){\n            this.direction = 'vertical'\n            this.icon.src = \"img/sidwaysArrow.jpg\";\n            this.xpos = 775;\n            this.ypos = 460;\n        }else{\n            this.direction = 'horizontal'\n            this.icon.src = \"img/arrow.png\";\n            this.xpos = 750;\n            this.ypos = 480;\n        }\n\n        this.drawLaser = this.drawLaser.bind(this)\n        this.move = this.move.bind(this);\n        this.moveHorizontal = this.moveHorizontal.bind(this);\n        this.moveVertical = this.moveVertical.bind(this);\n        this.shootLaser = this.shootLaser.bind(this);\n        this.populateLaserArray = this.populateLaserArray.bind(this);\n        this.whichLaserShoots = this.whichLaserShoots.bind(this);\n    }\n\n    move(){\n        switch(this.direction){\n            case 'vertical': \n                this.moveVertical(); break;\n            case 'horizontal': this.moveHorizontal(); break;\n            default: return null; \n        }\n    }\n\n    moveHorizontal(){\n        if (window.keysdown[37] || window.keysdown[65] ) { \n            if(this.xpos > -30) this.xpos -= 5;\n        } else if (window.keysdown[39] ||  window.keysdown[68]){\n            if(this.xpos < 750)this.xpos +=5\n        }\n    }\n\n    moveVertical(){\n        if (window.keysdown[38] || window.keysdown[87]) { \n            if(this.ypos > -20) this.ypos -= 5;\n        } else if (window.keysdown[40] || window.keysdown[83]) {\n            if(this.ypos < 460) this.ypos += 5\n        }\n    }\n\n    whichLaserShoots(){\n        let returnval;\n        // debugger\n        if (75 in window.keysdown || 90 in window.keysdown) {\n            returnval = this.shootLaser('horizontal');\n        } else if (76 in window.keysdown || 88 in window.keysdown) {\n           returnval = this.shootLaser('vertical');\n        }\n        return returnval;\n    }\n\n    shootLaser(direction){\n        if (window.keysdown[75] || window.keysdown[90]){ // k or z\n            this.populateLaserArray(direction);\n        } else if (window.keysdown[76] || window.keysdown[88]){ //L or x\n            this.populateLaserArray(direction);\n        }\n        if(direction === 'vertical'){\n            return 'vertical';\n        }else if(direction ==='horizontal'){\n            return 'horizontal';\n        }\n    }\n\n    populateLaserArray(direction){\n        this.laserArray.push(new Line(this.xpos, this.ypos, direction, this.ctx));\n        this.drawLaser();\n    }\n\n    drawLaser(){\n        for(let i = 0; i < this.laserArray.length; i++){\n            this.laserArray[i].drawLine();\n        }\n    }\n}\n\nmodule.exports = Laser;\n\n//# sourceURL=webpack:///./src/laser.js?");

/***/ }),

/***/ "./src/line.js":
/*!*********************!*\
  !*** ./src/line.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Line {\n    constructor(x, y , direction, ctx){\n        this.xpos = x;\n        this.ypos = y;\n        this.lastPosX = 0;\n        this.lastPosY = 0;\n        this.direction = direction;\n        this.ctx = ctx;\n        this.finalY = this.ypos; //Used for animating line\n        this.finalX = this.xpos; //Used for animating line\n        this.drawLine = this.drawLine.bind(this);\n    }\n\n    drawLine(){\n        if (this.direction === 'horizontal') { //draws line vertical\n            this.ctx.beginPath(); // change xpos\n            this.ctx.moveTo(this.xpos + 29, this.ypos + 2);\n            this.ctx.strokeStyle = \"white\";\n            this.ctx.lineWidth = \"1\";\n            this.ctx.lineTo(this.xpos + 29, this.finalY);\n            this.ctx.stroke();\n            this.ctx.closePath();\n            if(this.finalY > this.lastPosY){\n                this.finalY -= 5;\n            } else{\n                this.lastPosY = this.finalY;\n            }\n        } else if (this.direction === 'vertical') { //draws line horizontal \n            this.ctx.beginPath(); //change ypos\n            this.ctx.moveTo(this.xpos+3, this.ypos + 20);\n            this.ctx.strokeStyle = \"white\";\n            this.ctx.lineWidth = \"1\";\n            this.ctx.lineTo(this.finalX, this.ypos + 20);\n            this.ctx.stroke();\n            if (this.finalX > this.lastPosX){\n                this.finalX -= 5;\n            } else {\n                this.lastPosX = this.finalX;\n            }\n        }\n    }\n\n    returnValues(){\n        return{\n            startWidth: this.lastPosX,\n            startHeight: this.lastPosY, //3\n            maxWidth: this.xpos, //772\n            maxHeight: this.ypos, //482\n        }\n    }\n}\n\nmodule.exports = Line;\n\n//# sourceURL=webpack:///./src/line.js?");

/***/ })

/******/ });