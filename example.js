/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _RainbowVis = __webpack_require__(1);
	
	var _RainbowVis2 = _interopRequireDefault(_RainbowVis);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.onload = function () {
	    try {
	        // Mappings
	        // Default
	        var rainbow = new _RainbowVis2.default(); // by default, range is 0 to 100
	        var s = '<h3>Default</h3>';
	        for (var i = 0; i <= 100; i = i + 10) {
	            var hex = '#' + rainbow.colorAt(i);
	            s += '<span style="color:' + hex + '">' + i + ' -&gt; ' + hex + '</span><br/>';
	        }
	
	        // Custom
	        s += '<h3>Custom</h3>';
	        rainbow.setSpectrum('red', 'FFFFFF', '#00ff00');
	        rainbow.setNumberRange(-0.5, 0.5);
	        for (var _i = -5; _i <= 5; _i++) {
	            var _hex = '#' + rainbow.colorAt(_i / 10);
	            s += '<span style="color:' + _hex + '">' + _i / 10 + ' -&gt; ' + _hex + '</span><br/>';
	        }
	        document.getElementById("mappings").innerHTML = s;
	
	        // Wattages
	        var wattages = [["Clothes Dryer", 5000], ["Air Conditioner (36,000 BTU)", 4500], ["Water Heater (Quick Recovery)", 4500], ["Range (Oven)", 2660], ["Range (Self Cleaning Cycle)", 2500], ["Power Tools (Circular Saw)", 1800], ["Vacuum Cleaner", 1560], ["Air Conditioner (12,000 BTU)", 1500], ["Convection Oven", 1500], ["Curling Iron", 1500], ["Heater (Portable)", 1500], ["Jacuzzi (Maintain Temperature, 2 Person)", 1500], ["Microwave Oven", 1500], ["Toaster", 1400], ["Dishwasher (Dry Cycle)", 1200], ["Fry Pan", 1200], ["Waffle Iron", 1200], ["Coffee Maker (Auto Drip)", 1165], ["Hair Dryer (Hand Held)", 1000], ["Heater (Auto Engine, Winter)", 1000], ["Iron", 1000], ["Motor (1 HP)", 1000], ["Auto Engine Heater", 600], ["Washer", 512], ["Sump Pump (1/2 HP)", 500], ["Water Pump (1/2 HP)", 460], ["Dehumidifier (20 Pints, Summer)", 450], ["Refrigerator/Freezer (Frostfree,17.5cu.ft.)", 450], ["Freezer (Automatic Defrost 15 cu. ft.)", 440], ["Disposal", 420], ["Compactor", 400], ["Fan (Attic)", 400], ["Blender", 385], ["Waterbed Heater (Queen Size)", 375], ["Computer (With Monitor and Printer)", 365], ["Satellite Dish (Includes Receiver)", 360], ["Freezer (Manual Defrost, 15 cu. ft.)", 350], ["Garage Door Opener", 350], ["Heating System (Warm Air Fan)", 312], ["CD, Tape, Radio, Receiver System", 250], ["Heat Lamp", 250], ["Dishwasher (Wash Cycle)", 200], ["Television (Color, Solid State)", 200], ["Heat Tape (30ft., Winter)", 180], ["Humidifier (Winter)", 177], ["Electric Blanket", 175], ["Battery Charger (Car)", 150], ["Lighting (Outdoor Floor)", 120], ["Mixer, Hand", 100], ["Fan (Ceiling)", 80], ["Lighting (Incandescent)", 75], ["Radio", 71], ["Bug Zapper", 40], ["Lighting (Fluorescent)", 40], ["VCR/DVD", 21], ["Lighting (Compact Fluorescent)", 18], ["Clock", 3]];
	
	        var heatmap = new _RainbowVis2.default();
	        heatmap.setSpectrum('black', 'blue', 'aqua', 'lime', 'yellow', 'red');
	        heatmap.setNumberRange(0, 5000);
	        var table = '<table><tr><th>Appliance</th><th>Typical Wattage</th></tr>';
	        for (var _i2 = 0; _i2 < wattages.length; _i2++) {
	            var appliance = wattages[_i2][0];
	            var watts = wattages[_i2][1];
	            table += '<tr><td>' + appliance + '</td>';
	            var hexColour = '#' + heatmap.colorAt(watts);
	            table += '<td style="background-color:' + hexColour + '; color: #fff">' + watts + '</td></tr>';
	        }
	        table += '</table>';
	        table += '<p>Source: <a href="http://www.cornhusker-power.com/householdappliances.asp">Operating Costs of Household Appliances</a></p>';
	        document.getElementById("wattages").innerHTML = table;
	
	        // Canvas Drawing
	        var RAINBOW_WIDTH = 60;
	        var RAINBOW_RADIUS = 130;
	        var rainbow2 = new _RainbowVis2.default();
	        rainbow2.setNumberRange(1, RAINBOW_WIDTH);
	        rainbow2.setSpectrum('FF0000', 'FFFF00', '00FF00', '00FFFF', '0000FF', 'FF00FF');
	
	        var canvas = document.getElementById('MyRainbow');
	        var context = canvas.getContext('2d');
	
	        context.lineWidth = 1;
	        for (var _i3 = 1; _i3 <= RAINBOW_WIDTH; _i3++) {
	            context.beginPath();
	            context.arc(canvas.width / 2, canvas.width / 2, RAINBOW_RADIUS - _i3 + 1, Math.PI, 0, false);
	            context.strokeStyle = '#' + rainbow2.colorAt(_i3);
	            context.stroke();
	        }
	    } catch (err) {
	        console.error(err);
	    }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	 RainbowVis-JS
	 Released under Eclipse Public License - v 1.0
	 */
	
	var ColorGradient = function () {
	    function ColorGradient(start, end, min, max) {
	        _classCallCheck(this, ColorGradient);
	
	        this.startColour = ColorGradient.getHexColor(start);
	        this.endColour = ColorGradient.getHexColor(end);
	        this.minNum = min;
	        this.maxNum = max;
	    }
	
	    _createClass(ColorGradient, [{
	        key: 'setGradient',
	        value: function setGradient(colourStart, colourEnd) {
	            this.startColour = ColorGradient.getHexColor(colourStart);
	            this.endColour = ColorGradient.getHexColor(colourEnd);
	
	            return this;
	        }
	    }, {
	        key: 'setNumberRange',
	        value: function setNumberRange(minNumber, maxNumber) {
	            if (maxNumber > minNumber) {
	                this.minNum = minNumber;
	                this.maxNum = maxNumber;
	
	                return this;
	            } else {
	                throw new RangeError('maxNumber (' + maxNumber + ') is not greater than minNumber (' + minNumber + ')');
	            }
	        }
	    }, {
	        key: 'colourAt',
	        value: function colourAt(number) {
	            return this.calcHex(number, this.startColour.substring(0, 2), this.endColour.substring(0, 2)) + this.calcHex(number, this.startColour.substring(2, 4), this.endColour.substring(2, 4)) + this.calcHex(number, this.startColour.substring(4, 6), this.endColour.substring(4, 6));
	        }
	    }, {
	        key: 'calcHex',
	        value: function calcHex(number, channelStart_Base16, channelEnd_Base16) {
	            var num = number;
	            if (num < this.minNum) {
	                num = this.minNum;
	            }
	            if (num > this.maxNum) {
	                num = this.maxNum;
	            }
	            var numRange = this.maxNum - this.minNum;
	            var cStart_Base10 = parseInt(channelStart_Base16, 16);
	            var cEnd_Base10 = parseInt(channelEnd_Base16, 16);
	            var cPerUnit = (cEnd_Base10 - cStart_Base10) / numRange;
	            var c_Base10 = Math.round(cPerUnit * (num - this.minNum) + cStart_Base10);
	
	            return ColorGradient.formatHex(c_Base10.toString(16));
	        }
	    }], [{
	        key: 'formatHex',
	        value: function formatHex(hex) {
	            if (hex.length === 1) {
	                return '0' + hex;
	            } else {
	                return hex;
	            }
	        }
	    }, {
	        key: 'isHexColor',
	        value: function isHexColor(string) {
	            var regex = /^#?[0-9a-fA-F]{6}$/i;
	
	            return regex.test(string);
	        }
	
	        /**
	         *
	         * @param {String} string
	         * @returns {*}
	         */
	
	    }, {
	        key: 'getHexColor',
	        value: function getHexColor(string) {
	            if (ColorGradient.isHexColor(string)) {
	                return string.substring(string.length - 6, string.length);
	            } else {
	                var name = string.toLowerCase();
	                if (colorNames.hasOwnProperty(name)) {
	                    return colorNames[name];
	                }
	                throw new Error(string + ' is not a valid colour.');
	            }
	        }
	    }]);
	
	    return ColorGradient;
	}();
	
	var Rainbow = function () {
	    function Rainbow() {
	        var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	        var colors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['ff0000', 'ffff00', '00ff00', '0000ff'];
	
	        _classCallCheck(this, Rainbow);
	
	        this.gradients = null;
	        this.minNum = min;
	        this.maxNum = max;
	        this.setColors(colors);
	    }
	
	    _createClass(Rainbow, [{
	        key: 'setColors',
	        value: function setColors(spectrum) {
	            if (spectrum.length < 2) {
	                throw new Error('Rainbow must have two or more colours.');
	            } else {
	                var increment = (this.maxNum - this.minNum) / (spectrum.length - 1);
	                var firstGradient = new ColorGradient(spectrum[0], spectrum[1], this.minNum, this.minNum + increment);
	                this.gradients = [firstGradient];
	
	                for (var i = 1; i < spectrum.length - 1; i++) {
	                    this.gradients[i] = new ColorGradient(spectrum[i], spectrum[i + 1], this.minNum + increment * i, this.minNum + increment * (i + 1));
	                }
	
	                this.colours = spectrum;
	            }
	
	            return this;
	        }
	
	        /**
	         * format example: [[0, '#000000'], [0.2, '#FF0000'], [1, '#FFFFFF']]
	         * @param spectrum
	         */
	
	    }, {
	        key: 'setColorFromGradient',
	        value: function setColorFromGradient(spectrum) {
	            this.gradients = [];
	            var spaceSize = this.maxNum - this.minNum;
	
	            var _spectrum$ = _slicedToArray(spectrum[0], 2),
	                prevValue = _spectrum$[0],
	                prevColor = _spectrum$[1];
	
	            for (var i = 1; i < spectrum.length; i++) {
	                var _spectrum$i = _slicedToArray(spectrum[i], 2),
	                    value = _spectrum$i[0],
	                    color = _spectrum$i[1];
	
	                this.gradients.push(new ColorGradient(prevValue, value, this.minNum + spaceSize * prevColor, this.minNum + spaceSize * color));
	
	                prevValue = value;
	                prevColor = color;
	            }
	
	            return this;
	        }
	    }, {
	        key: 'setSpectrum',
	        value: function setSpectrum() {
	            this.setColors(arguments);
	
	            return this;
	        }
	    }, {
	        key: 'setSpectrumByArray',
	        value: function setSpectrumByArray(array) {
	            return this.setColors(array);
	        }
	    }, {
	        key: 'colorAt',
	        value: function colorAt(number) {
	            if (isNaN(number)) {
	                throw new TypeError(number + ' is not a number');
	            } else if (this.gradients.length === 1) {
	                return this.gradients[0].colourAt(number);
	            } else {
	                var segment = (this.maxNum - this.minNum) / this.gradients.length;
	                var index = Math.min(Math.floor((Math.max(number, this.minNum) - this.minNum) / segment), this.gradients.length - 1);
	                return this.gradients[index].colourAt(number);
	            }
	        }
	    }, {
	        key: 'setNumberRange',
	        value: function setNumberRange(minNumber, maxNumber) {
	            if (maxNumber > minNumber) {
	                this.minNum = minNumber;
	                this.maxNum = maxNumber;
	                this.setColors(this.colours);
	            } else {
	                throw new RangeError('maxNumber (' + maxNumber + ') is not greater than minNumber (' + minNumber + ')');
	            }
	            return this;
	        }
	    }]);
	
	    return Rainbow;
	}();
	
	// Extended list of CSS colornames s taken from
	// http://www.w3.org/TR/css3-color/#svg-color
	
	
	var colorNames = {
	    aliceblue: "F0F8FF",
	    antiquewhite: "FAEBD7",
	    aqua: "00FFFF",
	    aquamarine: "7FFFD4",
	    azure: "F0FFFF",
	    beige: "F5F5DC",
	    bisque: "FFE4C4",
	    black: "000000",
	    blanchedalmond: "FFEBCD",
	    blue: "0000FF",
	    blueviolet: "8A2BE2",
	    brown: "A52A2A",
	    burlywood: "DEB887",
	    cadetblue: "5F9EA0",
	    chartreuse: "7FFF00",
	    chocolate: "D2691E",
	    coral: "FF7F50",
	    cornflowerblue: "6495ED",
	    cornsilk: "FFF8DC",
	    crimson: "DC143C",
	    cyan: "00FFFF",
	    darkblue: "00008B",
	    darkcyan: "008B8B",
	    darkgoldenrod: "B8860B",
	    darkgray: "A9A9A9",
	    darkgreen: "006400",
	    darkgrey: "A9A9A9",
	    darkkhaki: "BDB76B",
	    darkmagenta: "8B008B",
	    darkolivegreen: "556B2F",
	    darkorange: "FF8C00",
	    darkorchid: "9932CC",
	    darkred: "8B0000",
	    darksalmon: "E9967A",
	    darkseagreen: "8FBC8F",
	    darkslateblue: "483D8B",
	    darkslategray: "2F4F4F",
	    darkslategrey: "2F4F4F",
	    darkturquoise: "00CED1",
	    darkviolet: "9400D3",
	    deeppink: "FF1493",
	    deepskyblue: "00BFFF",
	    dimgray: "696969",
	    dimgrey: "696969",
	    dodgerblue: "1E90FF",
	    firebrick: "B22222",
	    floralwhite: "FFFAF0",
	    forestgreen: "228B22",
	    fuchsia: "FF00FF",
	    gainsboro: "DCDCDC",
	    ghostwhite: "F8F8FF",
	    gold: "FFD700",
	    goldenrod: "DAA520",
	    gray: "808080",
	    green: "008000",
	    greenyellow: "ADFF2F",
	    grey: "808080",
	    honeydew: "F0FFF0",
	    hotpink: "FF69B4",
	    indianred: "CD5C5C",
	    indigo: "4B0082",
	    ivory: "FFFFF0",
	    khaki: "F0E68C",
	    lavender: "E6E6FA",
	    lavenderblush: "FFF0F5",
	    lawngreen: "7CFC00",
	    lemonchiffon: "FFFACD",
	    lightblue: "ADD8E6",
	    lightcoral: "F08080",
	    lightcyan: "E0FFFF",
	    lightgoldenrodyellow: "FAFAD2",
	    lightgray: "D3D3D3",
	    lightgreen: "90EE90",
	    lightgrey: "D3D3D3",
	    lightpink: "FFB6C1",
	    lightsalmon: "FFA07A",
	    lightseagreen: "20B2AA",
	    lightskyblue: "87CEFA",
	    lightslategray: "778899",
	    lightslategrey: "778899",
	    lightsteelblue: "B0C4DE",
	    lightyellow: "FFFFE0",
	    lime: "00FF00",
	    limegreen: "32CD32",
	    linen: "FAF0E6",
	    magenta: "FF00FF",
	    maroon: "800000",
	    mediumaquamarine: "66CDAA",
	    mediumblue: "0000CD",
	    mediumorchid: "BA55D3",
	    mediumpurple: "9370DB",
	    mediumseagreen: "3CB371",
	    mediumslateblue: "7B68EE",
	    mediumspringgreen: "00FA9A",
	    mediumturquoise: "48D1CC",
	    mediumvioletred: "C71585",
	    midnightblue: "191970",
	    mintcream: "F5FFFA",
	    mistyrose: "FFE4E1",
	    moccasin: "FFE4B5",
	    navajowhite: "FFDEAD",
	    navy: "000080",
	    oldlace: "FDF5E6",
	    olive: "808000",
	    olivedrab: "6B8E23",
	    orange: "FFA500",
	    orangered: "FF4500",
	    orchid: "DA70D6",
	    palegoldenrod: "EEE8AA",
	    palegreen: "98FB98",
	    paleturquoise: "AFEEEE",
	    palevioletred: "DB7093",
	    papayawhip: "FFEFD5",
	    peachpuff: "FFDAB9",
	    peru: "CD853F",
	    pink: "FFC0CB",
	    plum: "DDA0DD",
	    powderblue: "B0E0E6",
	    purple: "800080",
	    red: "FF0000",
	    rosybrown: "BC8F8F",
	    royalblue: "4169E1",
	    saddlebrown: "8B4513",
	    salmon: "FA8072",
	    sandybrown: "F4A460",
	    seagreen: "2E8B57",
	    seashell: "FFF5EE",
	    sienna: "A0522D",
	    silver: "C0C0C0",
	    skyblue: "87CEEB",
	    slateblue: "6A5ACD",
	    slategray: "708090",
	    slategrey: "708090",
	    snow: "FFFAFA",
	    springgreen: "00FF7F",
	    steelblue: "4682B4",
	    tan: "D2B48C",
	    teal: "008080",
	    thistle: "D8BFD8",
	    tomato: "FF6347",
	    turquoise: "40E0D0",
	    violet: "EE82EE",
	    wheat: "F5DEB3",
	    white: "FFFFFF",
	    whitesmoke: "F5F5F5",
	    yellow: "FFFF00",
	    yellowgreen: "9ACD32"
	};
	
	exports.default = Rainbow;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGE1MGJhYmMyYzY0YjQ2ZmJmNWQiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vUmFpbmJvd1Zpcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJyYWluYm93IiwicyIsImkiLCJoZXgiLCJjb2xvckF0Iiwic2V0U3BlY3RydW0iLCJzZXROdW1iZXJSYW5nZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJ3YXR0YWdlcyIsImhlYXRtYXAiLCJ0YWJsZSIsImxlbmd0aCIsImFwcGxpYW5jZSIsIndhdHRzIiwiaGV4Q29sb3VyIiwiUkFJTkJPV19XSURUSCIsIlJBSU5CT1dfUkFESVVTIiwicmFpbmJvdzIiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImxpbmVXaWR0aCIsImJlZ2luUGF0aCIsImFyYyIsIndpZHRoIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJDb2xvckdyYWRpZW50Iiwic3RhcnQiLCJlbmQiLCJtaW4iLCJtYXgiLCJzdGFydENvbG91ciIsImdldEhleENvbG9yIiwiZW5kQ29sb3VyIiwibWluTnVtIiwibWF4TnVtIiwiY29sb3VyU3RhcnQiLCJjb2xvdXJFbmQiLCJtaW5OdW1iZXIiLCJtYXhOdW1iZXIiLCJSYW5nZUVycm9yIiwibnVtYmVyIiwiY2FsY0hleCIsInN1YnN0cmluZyIsImNoYW5uZWxTdGFydF9CYXNlMTYiLCJjaGFubmVsRW5kX0Jhc2UxNiIsIm51bSIsIm51bVJhbmdlIiwiY1N0YXJ0X0Jhc2UxMCIsInBhcnNlSW50IiwiY0VuZF9CYXNlMTAiLCJjUGVyVW5pdCIsImNfQmFzZTEwIiwicm91bmQiLCJmb3JtYXRIZXgiLCJ0b1N0cmluZyIsInN0cmluZyIsInJlZ2V4IiwidGVzdCIsImlzSGV4Q29sb3IiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJjb2xvck5hbWVzIiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsIlJhaW5ib3ciLCJjb2xvcnMiLCJncmFkaWVudHMiLCJzZXRDb2xvcnMiLCJzcGVjdHJ1bSIsImluY3JlbWVudCIsImZpcnN0R3JhZGllbnQiLCJjb2xvdXJzIiwic3BhY2VTaXplIiwicHJldlZhbHVlIiwicHJldkNvbG9yIiwidmFsdWUiLCJjb2xvciIsInB1c2giLCJhcmd1bWVudHMiLCJhcnJheSIsImlzTmFOIiwiVHlwZUVycm9yIiwiY29sb3VyQXQiLCJzZWdtZW50IiwiaW5kZXgiLCJmbG9vciIsImFsaWNlYmx1ZSIsImFudGlxdWV3aGl0ZSIsImFxdWEiLCJhcXVhbWFyaW5lIiwiYXp1cmUiLCJiZWlnZSIsImJpc3F1ZSIsImJsYWNrIiwiYmxhbmNoZWRhbG1vbmQiLCJibHVlIiwiYmx1ZXZpb2xldCIsImJyb3duIiwiYnVybHl3b29kIiwiY2FkZXRibHVlIiwiY2hhcnRyZXVzZSIsImNob2NvbGF0ZSIsImNvcmFsIiwiY29ybmZsb3dlcmJsdWUiLCJjb3Juc2lsayIsImNyaW1zb24iLCJjeWFuIiwiZGFya2JsdWUiLCJkYXJrY3lhbiIsImRhcmtnb2xkZW5yb2QiLCJkYXJrZ3JheSIsImRhcmtncmVlbiIsImRhcmtncmV5IiwiZGFya2toYWtpIiwiZGFya21hZ2VudGEiLCJkYXJrb2xpdmVncmVlbiIsImRhcmtvcmFuZ2UiLCJkYXJrb3JjaGlkIiwiZGFya3JlZCIsImRhcmtzYWxtb24iLCJkYXJrc2VhZ3JlZW4iLCJkYXJrc2xhdGVibHVlIiwiZGFya3NsYXRlZ3JheSIsImRhcmtzbGF0ZWdyZXkiLCJkYXJrdHVycXVvaXNlIiwiZGFya3Zpb2xldCIsImRlZXBwaW5rIiwiZGVlcHNreWJsdWUiLCJkaW1ncmF5IiwiZGltZ3JleSIsImRvZGdlcmJsdWUiLCJmaXJlYnJpY2siLCJmbG9yYWx3aGl0ZSIsImZvcmVzdGdyZWVuIiwiZnVjaHNpYSIsImdhaW5zYm9ybyIsImdob3N0d2hpdGUiLCJnb2xkIiwiZ29sZGVucm9kIiwiZ3JheSIsImdyZWVuIiwiZ3JlZW55ZWxsb3ciLCJncmV5IiwiaG9uZXlkZXciLCJob3RwaW5rIiwiaW5kaWFucmVkIiwiaW5kaWdvIiwiaXZvcnkiLCJraGFraSIsImxhdmVuZGVyIiwibGF2ZW5kZXJibHVzaCIsImxhd25ncmVlbiIsImxlbW9uY2hpZmZvbiIsImxpZ2h0Ymx1ZSIsImxpZ2h0Y29yYWwiLCJsaWdodGN5YW4iLCJsaWdodGdvbGRlbnJvZHllbGxvdyIsImxpZ2h0Z3JheSIsImxpZ2h0Z3JlZW4iLCJsaWdodGdyZXkiLCJsaWdodHBpbmsiLCJsaWdodHNhbG1vbiIsImxpZ2h0c2VhZ3JlZW4iLCJsaWdodHNreWJsdWUiLCJsaWdodHNsYXRlZ3JheSIsImxpZ2h0c2xhdGVncmV5IiwibGlnaHRzdGVlbGJsdWUiLCJsaWdodHllbGxvdyIsImxpbWUiLCJsaW1lZ3JlZW4iLCJsaW5lbiIsIm1hZ2VudGEiLCJtYXJvb24iLCJtZWRpdW1hcXVhbWFyaW5lIiwibWVkaXVtYmx1ZSIsIm1lZGl1bW9yY2hpZCIsIm1lZGl1bXB1cnBsZSIsIm1lZGl1bXNlYWdyZWVuIiwibWVkaXVtc2xhdGVibHVlIiwibWVkaXVtc3ByaW5nZ3JlZW4iLCJtZWRpdW10dXJxdW9pc2UiLCJtZWRpdW12aW9sZXRyZWQiLCJtaWRuaWdodGJsdWUiLCJtaW50Y3JlYW0iLCJtaXN0eXJvc2UiLCJtb2NjYXNpbiIsIm5hdmFqb3doaXRlIiwibmF2eSIsIm9sZGxhY2UiLCJvbGl2ZSIsIm9saXZlZHJhYiIsIm9yYW5nZSIsIm9yYW5nZXJlZCIsIm9yY2hpZCIsInBhbGVnb2xkZW5yb2QiLCJwYWxlZ3JlZW4iLCJwYWxldHVycXVvaXNlIiwicGFsZXZpb2xldHJlZCIsInBhcGF5YXdoaXAiLCJwZWFjaHB1ZmYiLCJwZXJ1IiwicGluayIsInBsdW0iLCJwb3dkZXJibHVlIiwicHVycGxlIiwicmVkIiwicm9zeWJyb3duIiwicm95YWxibHVlIiwic2FkZGxlYnJvd24iLCJzYWxtb24iLCJzYW5keWJyb3duIiwic2VhZ3JlZW4iLCJzZWFzaGVsbCIsInNpZW5uYSIsInNpbHZlciIsInNreWJsdWUiLCJzbGF0ZWJsdWUiLCJzbGF0ZWdyYXkiLCJzbGF0ZWdyZXkiLCJzbm93Iiwic3ByaW5nZ3JlZW4iLCJzdGVlbGJsdWUiLCJ0YW4iLCJ0ZWFsIiwidGhpc3RsZSIsInRvbWF0byIsInR1cnF1b2lzZSIsInZpb2xldCIsIndoZWF0Iiwid2hpdGUiLCJ3aGl0ZXNtb2tlIiwieWVsbG93IiwieWVsbG93Z3JlZW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBQSxRQUFPQyxNQUFQLEdBQWdCLFlBQVk7QUFDeEIsU0FBSTtBQUNBO0FBQ0E7QUFDQSxhQUFJQyxVQUFVLDBCQUFkLENBSEEsQ0FHNkI7QUFDN0IsYUFBSUMsSUFBSSxrQkFBUjtBQUNBLGNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxLQUFLLEdBQXJCLEVBQTBCQSxJQUFJQSxJQUFJLEVBQWxDLEVBQXNDO0FBQ2xDLGlCQUFJQyxNQUFNLE1BQU1ILFFBQVFJLE9BQVIsQ0FBZ0JGLENBQWhCLENBQWhCO0FBQ0FELGtCQUFLLHdCQUF3QkUsR0FBeEIsR0FBOEIsSUFBOUIsR0FBcUNELENBQXJDLEdBQXlDLFNBQXpDLEdBQXFEQyxHQUFyRCxHQUEyRCxjQUFoRTtBQUNIOztBQUVEO0FBQ0FGLGNBQUssaUJBQUw7QUFDQUQsaUJBQVFLLFdBQVIsQ0FBb0IsS0FBcEIsRUFBMkIsUUFBM0IsRUFBcUMsU0FBckM7QUFDQUwsaUJBQVFNLGNBQVIsQ0FBdUIsQ0FBQyxHQUF4QixFQUE2QixHQUE3QjtBQUNBLGNBQUssSUFBSUosS0FBSSxDQUFDLENBQWQs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LGdCQUFXLFFBeElJO0FBeUlmQyxVQUFLLFFBeklVO0FBMElmQyxXQUFNLFFBMUlTO0FBMklmQyxjQUFTLFFBM0lNO0FBNElmQyxhQUFRLFFBNUlPO0FBNklmQyxnQkFBVyxRQTdJSTtBQThJZkMsYUFBUSxRQTlJTztBQStJZkMsWUFBTyxRQS9JUTtBQWdKZkMsWUFBTyxRQWhKUTtBQWlKZkMsaUJBQVksUUFqSkc7QUFrSmZDLGFBQVEsUUFsSk87QUFtSmZDLGtCQUFhO0FBbkpFLEVBQW5COzttQkF1SmV4SyxPIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYTUwYmFiYzJjNjRiNDZmYmY1ZCIsImltcG9ydCBSYWluYm93IGZyb20gJy4vUmFpbmJvd1Zpcydcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBNYXBwaW5nc1xuICAgICAgICAvLyBEZWZhdWx0XG4gICAgICAgIGxldCByYWluYm93ID0gbmV3IFJhaW5ib3coKTsgLy8gYnkgZGVmYXVsdCwgcmFuZ2UgaXMgMCB0byAxMDBcbiAgICAgICAgbGV0IHMgPSAnPGgzPkRlZmF1bHQ8L2gzPic7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDEwMDsgaSA9IGkgKyAxMCkge1xuICAgICAgICAgICAgbGV0IGhleCA9ICcjJyArIHJhaW5ib3cuY29sb3JBdChpKTtcbiAgICAgICAgICAgIHMgKz0gJzxzcGFuIHN0eWxlPVwiY29sb3I6JyArIGhleCArICdcIj4nICsgaSArICcgLSZndDsgJyArIGhleCArICc8L3NwYW4+PGJyLz4nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3VzdG9tXG4gICAgICAgIHMgKz0gJzxoMz5DdXN0b208L2gzPic7XG4gICAgICAgIHJhaW5ib3cuc2V0U3BlY3RydW0oJ3JlZCcsICdGRkZGRkYnLCAnIzAwZmYwMCcpO1xuICAgICAgICByYWluYm93LnNldE51bWJlclJhbmdlKC0wLjUsIDAuNSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAtNTsgaSA8PSA1OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBoZXggPSAnIycgKyByYWluYm93LmNvbG9yQXQoaSAvIDEwKTtcbiAgICAgICAgICAgIHMgKz0gJzxzcGFuIHN0eWxlPVwiY29sb3I6JyArIGhleCArICdcIj4nICsgaSAvIDEwICsgJyAtJmd0OyAnICsgaGV4ICsgJzwvc3Bhbj48YnIvPic7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBwaW5nc1wiKS5pbm5lckhUTUwgPSBzO1xuXG4gICAgICAgIC8vIFdhdHRhZ2VzXG4gICAgICAgIGNvbnN0IHdhdHRhZ2VzID0gW1xuICAgICAgICAgICAgW1wiQ2xvdGhlcyBEcnllclwiLCA1MDAwXSxcbiAgICAgICAgICAgIFtcIkFpciBDb25kaXRpb25lciAoMzYsMDAwIEJUVSlcIiwgNDUwMF0sXG4gICAgICAgICAgICBbXCJXYXRlciBIZWF0ZXIgKFF1aWNrIFJlY292ZXJ5KVwiLCA0NTAwXSxcbiAgICAgICAgICAgIFtcIlJhbmdlIChPdmVuKVwiLCAyNjYwXSxcbiAgICAgICAgICAgIFtcIlJhbmdlIChTZWxmIENsZWFuaW5nIEN5Y2xlKVwiLCAyNTAwXSxcbiAgICAgICAgICAgIFtcIlBvd2VyIFRvb2xzIChDaXJjdWxhciBTYXcpXCIsIDE4MDBdLFxuICAgICAgICAgICAgW1wiVmFjdXVtIENsZWFuZXJcIiwgMTU2MF0sXG4gICAgICAgICAgICBbXCJBaXIgQ29uZGl0aW9uZXIgKDEyLDAwMCBCVFUpXCIsIDE1MDBdLFxuICAgICAgICAgICAgW1wiQ29udmVjdGlvbiBPdmVuXCIsIDE1MDBdLFxuICAgICAgICAgICAgW1wiQ3VybGluZyBJcm9uXCIsIDE1MDBdLFxuICAgICAgICAgICAgW1wiSGVhdGVyIChQb3J0YWJsZSlcIiwgMTUwMF0sXG4gICAgICAgICAgICBbXCJKYWN1enppIChNYWludGFpbiBUZW1wZXJhdHVyZSwgMiBQZXJzb24pXCIsIDE1MDBdLFxuICAgICAgICAgICAgW1wiTWljcm93YXZlIE92ZW5cIiwgMTUwMF0sXG4gICAgICAgICAgICBbXCJUb2FzdGVyXCIsIDE0MDBdLFxuICAgICAgICAgICAgW1wiRGlzaHdhc2hlciAoRHJ5IEN5Y2xlKVwiLCAxMjAwXSxcbiAgICAgICAgICAgIFtcIkZyeSBQYW5cIiwgMTIwMF0sXG4gICAgICAgICAgICBbXCJXYWZmbGUgSXJvblwiLCAxMjAwXSxcbiAgICAgICAgICAgIFtcIkNvZmZlZSBNYWtlciAoQXV0byBEcmlwKVwiLCAxMTY1XSxcbiAgICAgICAgICAgIFtcIkhhaXIgRHJ5ZXIgKEhhbmQgSGVsZClcIiwgMTAwMF0sXG4gICAgICAgICAgICBbXCJIZWF0ZXIgKEF1dG8gRW5naW5lLCBXaW50ZXIpXCIsIDEwMDBdLFxuICAgICAgICAgICAgW1wiSXJvblwiLCAxMDAwXSxcbiAgICAgICAgICAgIFtcIk1vdG9yICgxIEhQKVwiLCAxMDAwXSxcbiAgICAgICAgICAgIFtcIkF1dG8gRW5naW5lIEhlYXRlclwiLCA2MDBdLFxuICAgICAgICAgICAgW1wiV2FzaGVyXCIsIDUxMl0sXG4gICAgICAgICAgICBbXCJTdW1wIFB1bXAgKDEvMiBIUClcIiwgNTAwXSxcbiAgICAgICAgICAgIFtcIldhdGVyIFB1bXAgKDEvMiBIUClcIiwgNDYwXSxcbiAgICAgICAgICAgIFtcIkRlaHVtaWRpZmllciAoMjAgUGludHMsIFN1bW1lcilcIiwgNDUwXSxcbiAgICAgICAgICAgIFtcIlJlZnJpZ2VyYXRvci9GcmVlemVyIChGcm9zdGZyZWUsMTcuNWN1LmZ0LilcIiwgNDUwXSxcbiAgICAgICAgICAgIFtcIkZyZWV6ZXIgKEF1dG9tYXRpYyBEZWZyb3N0IDE1IGN1LiBmdC4pXCIsIDQ0MF0sXG4gICAgICAgICAgICBbXCJEaXNwb3NhbFwiLCA0MjBdLFxuICAgICAgICAgICAgW1wiQ29tcGFjdG9yXCIsIDQwMF0sXG4gICAgICAgICAgICBbXCJGYW4gKEF0dGljKVwiLCA0MDBdLFxuICAgICAgICAgICAgW1wiQmxlbmRlclwiLCAzODVdLFxuICAgICAgICAgICAgW1wiV2F0ZXJiZWQgSGVhdGVyIChRdWVlbiBTaXplKVwiLCAzNzVdLFxuICAgICAgICAgICAgW1wiQ29tcHV0ZXIgKFdpdGggTW9uaXRvciBhbmQgUHJpbnRlcilcIiwgMzY1XSxcbiAgICAgICAgICAgIFtcIlNhdGVsbGl0ZSBEaXNoIChJbmNsdWRlcyBSZWNlaXZlcilcIiwgMzYwXSxcbiAgICAgICAgICAgIFtcIkZyZWV6ZXIgKE1hbnVhbCBEZWZyb3N0LCAxNSBjdS4gZnQuKVwiLCAzNTBdLFxuICAgICAgICAgICAgW1wiR2FyYWdlIERvb3IgT3BlbmVyXCIsIDM1MF0sXG4gICAgICAgICAgICBbXCJIZWF0aW5nIFN5c3RlbSAoV2FybSBBaXIgRmFuKVwiLCAzMTJdLFxuICAgICAgICAgICAgW1wiQ0QsIFRhcGUsIFJhZGlvLCBSZWNlaXZlciBTeXN0ZW1cIiwgMjUwXSxcbiAgICAgICAgICAgIFtcIkhlYXQgTGFtcFwiLCAyNTBdLFxuICAgICAgICAgICAgW1wiRGlzaHdhc2hlciAoV2FzaCBDeWNsZSlcIiwgMjAwXSxcbiAgICAgICAgICAgIFtcIlRlbGV2aXNpb24gKENvbG9yLCBTb2xpZCBTdGF0ZSlcIiwgMjAwXSxcbiAgICAgICAgICAgIFtcIkhlYXQgVGFwZSAoMzBmdC4sIFdpbnRlcilcIiwgMTgwXSxcbiAgICAgICAgICAgIFtcIkh1bWlkaWZpZXIgKFdpbnRlcilcIiwgMTc3XSxcbiAgICAgICAgICAgIFtcIkVsZWN0cmljIEJsYW5rZXRcIiwgMTc1XSxcbiAgICAgICAgICAgIFtcIkJhdHRlcnkgQ2hhcmdlciAoQ2FyKVwiLCAxNTBdLFxuICAgICAgICAgICAgW1wiTGlnaHRpbmcgKE91dGRvb3IgRmxvb3IpXCIsIDEyMF0sXG4gICAgICAgICAgICBbXCJNaXhlciwgSGFuZFwiLCAxMDBdLFxuICAgICAgICAgICAgW1wiRmFuIChDZWlsaW5nKVwiLCA4MF0sXG4gICAgICAgICAgICBbXCJMaWdodGluZyAoSW5jYW5kZXNjZW50KVwiLCA3NV0sXG4gICAgICAgICAgICBbXCJSYWRpb1wiLCA3MV0sXG4gICAgICAgICAgICBbXCJCdWcgWmFwcGVyXCIsIDQwXSxcbiAgICAgICAgICAgIFtcIkxpZ2h0aW5nIChGbHVvcmVzY2VudClcIiwgNDBdLFxuICAgICAgICAgICAgW1wiVkNSL0RWRFwiLCAyMV0sXG4gICAgICAgICAgICBbXCJMaWdodGluZyAoQ29tcGFjdCBGbHVvcmVzY2VudClcIiwgMThdLFxuICAgICAgICAgICAgW1wiQ2xvY2tcIiwgM11cbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgaGVhdG1hcCA9IG5ldyBSYWluYm93KCk7XG4gICAgICAgIGhlYXRtYXAuc2V0U3BlY3RydW0oJ2JsYWNrJywgJ2JsdWUnLCAnYXF1YScsICdsaW1lJywgJ3llbGxvdycsICdyZWQnKTtcbiAgICAgICAgaGVhdG1hcC5zZXROdW1iZXJSYW5nZSgwLCA1MDAwKTtcbiAgICAgICAgbGV0IHRhYmxlID0gJzx0YWJsZT48dHI+PHRoPkFwcGxpYW5jZTwvdGg+PHRoPlR5cGljYWwgV2F0dGFnZTwvdGg+PC90cj4nO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdhdHRhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXBwbGlhbmNlID0gd2F0dGFnZXNbaV1bMF07XG4gICAgICAgICAgICBsZXQgd2F0dHMgPSB3YXR0YWdlc1tpXVsxXTtcbiAgICAgICAgICAgIHRhYmxlICs9ICc8dHI+PHRkPicgKyBhcHBsaWFuY2UgKyAnPC90ZD4nO1xuICAgICAgICAgICAgbGV0IGhleENvbG91ciA9ICcjJyArIGhlYXRtYXAuY29sb3JBdCh3YXR0cyk7XG4gICAgICAgICAgICB0YWJsZSArPSAnPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonICsgaGV4Q29sb3VyICsgJzsgY29sb3I6ICNmZmZcIj4nICsgd2F0dHMgKyAnPC90ZD48L3RyPic7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUgKz0gJzwvdGFibGU+JztcbiAgICAgICAgdGFibGUgKz0gJzxwPlNvdXJjZTogPGEgaHJlZj1cImh0dHA6Ly93d3cuY29ybmh1c2tlci1wb3dlci5jb20vaG91c2Vob2xkYXBwbGlhbmNlcy5hc3BcIj5PcGVyYXRpbmcgQ29zdHMgb2YgSG91c2Vob2xkIEFwcGxpYW5jZXM8L2E+PC9wPic7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2F0dGFnZXNcIikuaW5uZXJIVE1MID0gdGFibGU7XG5cbiAgICAgICAgLy8gQ2FudmFzIERyYXdpbmdcbiAgICAgICAgY29uc3QgUkFJTkJPV19XSURUSCA9IDYwO1xuICAgICAgICBjb25zdCBSQUlOQk9XX1JBRElVUyA9IDEzMDtcbiAgICAgICAgbGV0IHJhaW5ib3cyID0gbmV3IFJhaW5ib3coKTtcbiAgICAgICAgcmFpbmJvdzIuc2V0TnVtYmVyUmFuZ2UoMSwgUkFJTkJPV19XSURUSCk7XG4gICAgICAgIHJhaW5ib3cyLnNldFNwZWN0cnVtKCdGRjAwMDAnLCAnRkZGRjAwJywgJzAwRkYwMCcsICcwMEZGRkYnLCAnMDAwMEZGJywgJ0ZGMDBGRicpO1xuXG4gICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTXlSYWluYm93Jyk7XG4gICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBSQUlOQk9XX1dJRFRIOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICBjb250ZXh0LmFyYyhjYW52YXMud2lkdGggLyAyLCBjYW52YXMud2lkdGggLyAyLCBSQUlOQk9XX1JBRElVUyAtIGkgKyAxLCBNYXRoLlBJLCAwLCBmYWxzZSk7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyMnICsgcmFpbmJvdzIuY29sb3JBdChpKTtcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXhhbXBsZS5qc3giLCIvKlxuIFJhaW5ib3dWaXMtSlNcbiBSZWxlYXNlZCB1bmRlciBFY2xpcHNlIFB1YmxpYyBMaWNlbnNlIC0gdiAxLjBcbiAqL1xuXG5jbGFzcyBDb2xvckdyYWRpZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydCwgZW5kLCBtaW4sIG1heCkge1xuICAgICAgICB0aGlzLnN0YXJ0Q29sb3VyID0gQ29sb3JHcmFkaWVudC5nZXRIZXhDb2xvcihzdGFydCk7XG4gICAgICAgIHRoaXMuZW5kQ29sb3VyID0gQ29sb3JHcmFkaWVudC5nZXRIZXhDb2xvcihlbmQpO1xuICAgICAgICB0aGlzLm1pbk51bSA9IG1pbjtcbiAgICAgICAgdGhpcy5tYXhOdW0gPSBtYXg7XG4gICAgfVxuXG4gICAgc2V0R3JhZGllbnQoY29sb3VyU3RhcnQsIGNvbG91ckVuZCkge1xuICAgICAgICB0aGlzLnN0YXJ0Q29sb3VyID0gQ29sb3JHcmFkaWVudC5nZXRIZXhDb2xvcihjb2xvdXJTdGFydCk7XG4gICAgICAgIHRoaXMuZW5kQ29sb3VyID0gQ29sb3JHcmFkaWVudC5nZXRIZXhDb2xvcihjb2xvdXJFbmQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBzZXROdW1iZXJSYW5nZShtaW5OdW1iZXIsIG1heE51bWJlcikge1xuICAgICAgICBpZiAobWF4TnVtYmVyID4gbWluTnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLm1pbk51bSA9IG1pbk51bWJlcjtcbiAgICAgICAgICAgIHRoaXMubWF4TnVtID0gbWF4TnVtYmVyO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdtYXhOdW1iZXIgKCcgKyBtYXhOdW1iZXIgKyAnKSBpcyBub3QgZ3JlYXRlciB0aGFuIG1pbk51bWJlciAoJyArIG1pbk51bWJlciArICcpJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29sb3VyQXQobnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNIZXgobnVtYmVyLCB0aGlzLnN0YXJ0Q29sb3VyLnN1YnN0cmluZygwLCAyKSwgdGhpcy5lbmRDb2xvdXIuc3Vic3RyaW5nKDAsIDIpKVxuICAgICAgICAgICAgKyB0aGlzLmNhbGNIZXgobnVtYmVyLCB0aGlzLnN0YXJ0Q29sb3VyLnN1YnN0cmluZygyLCA0KSwgdGhpcy5lbmRDb2xvdXIuc3Vic3RyaW5nKDIsIDQpKVxuICAgICAgICAgICAgKyB0aGlzLmNhbGNIZXgobnVtYmVyLCB0aGlzLnN0YXJ0Q29sb3VyLnN1YnN0cmluZyg0LCA2KSwgdGhpcy5lbmRDb2xvdXIuc3Vic3RyaW5nKDQsIDYpKTtcbiAgICB9O1xuXG4gICAgY2FsY0hleChudW1iZXIsIGNoYW5uZWxTdGFydF9CYXNlMTYsIGNoYW5uZWxFbmRfQmFzZTE2KSB7XG4gICAgICAgIGxldCBudW0gPSBudW1iZXI7XG4gICAgICAgIGlmIChudW0gPCB0aGlzLm1pbk51bSkge1xuICAgICAgICAgICAgbnVtID0gdGhpcy5taW5OdW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bSA+IHRoaXMubWF4TnVtKSB7XG4gICAgICAgICAgICBudW0gPSB0aGlzLm1heE51bTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbnVtUmFuZ2UgPSB0aGlzLm1heE51bSAtIHRoaXMubWluTnVtO1xuICAgICAgICBsZXQgY1N0YXJ0X0Jhc2UxMCA9IHBhcnNlSW50KGNoYW5uZWxTdGFydF9CYXNlMTYsIDE2KTtcbiAgICAgICAgbGV0IGNFbmRfQmFzZTEwID0gcGFyc2VJbnQoY2hhbm5lbEVuZF9CYXNlMTYsIDE2KTtcbiAgICAgICAgbGV0IGNQZXJVbml0ID0gKGNFbmRfQmFzZTEwIC0gY1N0YXJ0X0Jhc2UxMCkgLyBudW1SYW5nZTtcbiAgICAgICAgbGV0IGNfQmFzZTEwID0gTWF0aC5yb3VuZChjUGVyVW5pdCAqIChudW0gLSB0aGlzLm1pbk51bSkgKyBjU3RhcnRfQmFzZTEwKTtcblxuICAgICAgICByZXR1cm4gQ29sb3JHcmFkaWVudC5mb3JtYXRIZXgoY19CYXNlMTAudG9TdHJpbmcoMTYpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0SGV4KGhleCkge1xuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuICcwJyArIGhleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaXNIZXhDb2xvcihzdHJpbmcpIHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gL14jP1swLTlhLWZBLUZdezZ9JC9pO1xuXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KHN0cmluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc3RhdGljIGdldEhleENvbG9yKHN0cmluZykge1xuICAgICAgICBpZiAoQ29sb3JHcmFkaWVudC5pc0hleENvbG9yKHN0cmluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGggLSA2LCBzdHJpbmcubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoY29sb3JOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvck5hbWVzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cmluZyArICcgaXMgbm90IGEgdmFsaWQgY29sb3VyLicpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBSYWluYm93IHtcbiAgICBjb25zdHJ1Y3RvcihtaW4gPSAwLCBtYXggPSAxMDAsIGNvbG9ycyA9IFsnZmYwMDAwJywgJ2ZmZmYwMCcsICcwMGZmMDAnLCAnMDAwMGZmJ10pIHtcbiAgICAgICAgdGhpcy5ncmFkaWVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLm1pbk51bSA9IG1pbjtcbiAgICAgICAgdGhpcy5tYXhOdW0gPSBtYXg7XG4gICAgICAgIHRoaXMuc2V0Q29sb3JzKGNvbG9ycyk7XG4gICAgfVxuXG4gICAgc2V0Q29sb3JzKHNwZWN0cnVtKSB7XG4gICAgICAgIGlmIChzcGVjdHJ1bS5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhaW5ib3cgbXVzdCBoYXZlIHR3byBvciBtb3JlIGNvbG91cnMuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbmNyZW1lbnQgPSAodGhpcy5tYXhOdW0gLSB0aGlzLm1pbk51bSkgLyAoc3BlY3RydW0ubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBjb25zdCBmaXJzdEdyYWRpZW50ID0gbmV3IENvbG9yR3JhZGllbnQoc3BlY3RydW1bMF0sIHNwZWN0cnVtWzFdLCB0aGlzLm1pbk51bSwgdGhpcy5taW5OdW0gKyBpbmNyZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5ncmFkaWVudHMgPSBbZmlyc3RHcmFkaWVudF07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3BlY3RydW0ubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmFkaWVudHNbaV0gPSBuZXcgQ29sb3JHcmFkaWVudChzcGVjdHJ1bVtpXSwgc3BlY3RydW1baSArIDFdLCB0aGlzLm1pbk51bSArIGluY3JlbWVudCAqIGksIHRoaXMubWluTnVtICsgaW5jcmVtZW50ICogKGkgKyAxKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY29sb3VycyA9IHNwZWN0cnVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZm9ybWF0IGV4YW1wbGU6IFtbMCwgJyMwMDAwMDAnXSwgWzAuMiwgJyNGRjAwMDAnXSwgWzEsICcjRkZGRkZGJ11dXG4gICAgICogQHBhcmFtIHNwZWN0cnVtXG4gICAgICovXG4gICAgc2V0Q29sb3JGcm9tR3JhZGllbnQoc3BlY3RydW0pIHtcbiAgICAgICAgdGhpcy5ncmFkaWVudHMgPSBbXTtcbiAgICAgICAgbGV0IHNwYWNlU2l6ZSA9IHRoaXMubWF4TnVtIC0gdGhpcy5taW5OdW07XG4gICAgICAgIGxldCBbcHJldlZhbHVlLCBwcmV2Q29sb3JdID0gc3BlY3RydW1bMF07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzcGVjdHJ1bS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IFt2YWx1ZSwgY29sb3JdID0gc3BlY3RydW1baV07XG5cbiAgICAgICAgICAgIHRoaXMuZ3JhZGllbnRzLnB1c2gobmV3IENvbG9yR3JhZGllbnQocHJldlZhbHVlLCB2YWx1ZSwgdGhpcy5taW5OdW0gKyBzcGFjZVNpemUgKiBwcmV2Q29sb3IsIHRoaXMubWluTnVtICsgc3BhY2VTaXplICogY29sb3IpKTtcblxuICAgICAgICAgICAgcHJldlZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBwcmV2Q29sb3IgPSBjb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBzZXRTcGVjdHJ1bSgpIHtcbiAgICAgICAgdGhpcy5zZXRDb2xvcnMoYXJndW1lbnRzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgc2V0U3BlY3RydW1CeUFycmF5KGFycmF5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldENvbG9ycyhhcnJheSk7XG4gICAgfTtcblxuICAgIGNvbG9yQXQobnVtYmVyKSB7XG4gICAgICAgIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG51bWJlciArICcgaXMgbm90IGEgbnVtYmVyJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5ncmFkaWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFkaWVudHNbMF0uY29sb3VyQXQobnVtYmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzZWdtZW50ID0gKHRoaXMubWF4TnVtIC0gdGhpcy5taW5OdW0pIC8gKHRoaXMuZ3JhZGllbnRzLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLm1pbihNYXRoLmZsb29yKChNYXRoLm1heChudW1iZXIsIHRoaXMubWluTnVtKSAtIHRoaXMubWluTnVtKSAvIHNlZ21lbnQpLCB0aGlzLmdyYWRpZW50cy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYWRpZW50c1tpbmRleF0uY29sb3VyQXQobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzZXROdW1iZXJSYW5nZShtaW5OdW1iZXIsIG1heE51bWJlcikge1xuICAgICAgICBpZiAobWF4TnVtYmVyID4gbWluTnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLm1pbk51bSA9IG1pbk51bWJlcjtcbiAgICAgICAgICAgIHRoaXMubWF4TnVtID0gbWF4TnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcnModGhpcy5jb2xvdXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdtYXhOdW1iZXIgKCcgKyBtYXhOdW1iZXIgKyAnKSBpcyBub3QgZ3JlYXRlciB0aGFuIG1pbk51bWJlciAoJyArIG1pbk51bWJlciArICcpJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5cbi8vIEV4dGVuZGVkIGxpc3Qgb2YgQ1NTIGNvbG9ybmFtZXMgcyB0YWtlbiBmcm9tXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbmNvbnN0IGNvbG9yTmFtZXMgPSB7XG4gICAgYWxpY2VibHVlOiBcIkYwRjhGRlwiLFxuICAgIGFudGlxdWV3aGl0ZTogXCJGQUVCRDdcIixcbiAgICBhcXVhOiBcIjAwRkZGRlwiLFxuICAgIGFxdWFtYXJpbmU6IFwiN0ZGRkQ0XCIsXG4gICAgYXp1cmU6IFwiRjBGRkZGXCIsXG4gICAgYmVpZ2U6IFwiRjVGNURDXCIsXG4gICAgYmlzcXVlOiBcIkZGRTRDNFwiLFxuICAgIGJsYWNrOiBcIjAwMDAwMFwiLFxuICAgIGJsYW5jaGVkYWxtb25kOiBcIkZGRUJDRFwiLFxuICAgIGJsdWU6IFwiMDAwMEZGXCIsXG4gICAgYmx1ZXZpb2xldDogXCI4QTJCRTJcIixcbiAgICBicm93bjogXCJBNTJBMkFcIixcbiAgICBidXJseXdvb2Q6IFwiREVCODg3XCIsXG4gICAgY2FkZXRibHVlOiBcIjVGOUVBMFwiLFxuICAgIGNoYXJ0cmV1c2U6IFwiN0ZGRjAwXCIsXG4gICAgY2hvY29sYXRlOiBcIkQyNjkxRVwiLFxuICAgIGNvcmFsOiBcIkZGN0Y1MFwiLFxuICAgIGNvcm5mbG93ZXJibHVlOiBcIjY0OTVFRFwiLFxuICAgIGNvcm5zaWxrOiBcIkZGRjhEQ1wiLFxuICAgIGNyaW1zb246IFwiREMxNDNDXCIsXG4gICAgY3lhbjogXCIwMEZGRkZcIixcbiAgICBkYXJrYmx1ZTogXCIwMDAwOEJcIixcbiAgICBkYXJrY3lhbjogXCIwMDhCOEJcIixcbiAgICBkYXJrZ29sZGVucm9kOiBcIkI4ODYwQlwiLFxuICAgIGRhcmtncmF5OiBcIkE5QTlBOVwiLFxuICAgIGRhcmtncmVlbjogXCIwMDY0MDBcIixcbiAgICBkYXJrZ3JleTogXCJBOUE5QTlcIixcbiAgICBkYXJra2hha2k6IFwiQkRCNzZCXCIsXG4gICAgZGFya21hZ2VudGE6IFwiOEIwMDhCXCIsXG4gICAgZGFya29saXZlZ3JlZW46IFwiNTU2QjJGXCIsXG4gICAgZGFya29yYW5nZTogXCJGRjhDMDBcIixcbiAgICBkYXJrb3JjaGlkOiBcIjk5MzJDQ1wiLFxuICAgIGRhcmtyZWQ6IFwiOEIwMDAwXCIsXG4gICAgZGFya3NhbG1vbjogXCJFOTk2N0FcIixcbiAgICBkYXJrc2VhZ3JlZW46IFwiOEZCQzhGXCIsXG4gICAgZGFya3NsYXRlYmx1ZTogXCI0ODNEOEJcIixcbiAgICBkYXJrc2xhdGVncmF5OiBcIjJGNEY0RlwiLFxuICAgIGRhcmtzbGF0ZWdyZXk6IFwiMkY0RjRGXCIsXG4gICAgZGFya3R1cnF1b2lzZTogXCIwMENFRDFcIixcbiAgICBkYXJrdmlvbGV0OiBcIjk0MDBEM1wiLFxuICAgIGRlZXBwaW5rOiBcIkZGMTQ5M1wiLFxuICAgIGRlZXBza3libHVlOiBcIjAwQkZGRlwiLFxuICAgIGRpbWdyYXk6IFwiNjk2OTY5XCIsXG4gICAgZGltZ3JleTogXCI2OTY5NjlcIixcbiAgICBkb2RnZXJibHVlOiBcIjFFOTBGRlwiLFxuICAgIGZpcmVicmljazogXCJCMjIyMjJcIixcbiAgICBmbG9yYWx3aGl0ZTogXCJGRkZBRjBcIixcbiAgICBmb3Jlc3RncmVlbjogXCIyMjhCMjJcIixcbiAgICBmdWNoc2lhOiBcIkZGMDBGRlwiLFxuICAgIGdhaW5zYm9ybzogXCJEQ0RDRENcIixcbiAgICBnaG9zdHdoaXRlOiBcIkY4RjhGRlwiLFxuICAgIGdvbGQ6IFwiRkZENzAwXCIsXG4gICAgZ29sZGVucm9kOiBcIkRBQTUyMFwiLFxuICAgIGdyYXk6IFwiODA4MDgwXCIsXG4gICAgZ3JlZW46IFwiMDA4MDAwXCIsXG4gICAgZ3JlZW55ZWxsb3c6IFwiQURGRjJGXCIsXG4gICAgZ3JleTogXCI4MDgwODBcIixcbiAgICBob25leWRldzogXCJGMEZGRjBcIixcbiAgICBob3RwaW5rOiBcIkZGNjlCNFwiLFxuICAgIGluZGlhbnJlZDogXCJDRDVDNUNcIixcbiAgICBpbmRpZ286IFwiNEIwMDgyXCIsXG4gICAgaXZvcnk6IFwiRkZGRkYwXCIsXG4gICAga2hha2k6IFwiRjBFNjhDXCIsXG4gICAgbGF2ZW5kZXI6IFwiRTZFNkZBXCIsXG4gICAgbGF2ZW5kZXJibHVzaDogXCJGRkYwRjVcIixcbiAgICBsYXduZ3JlZW46IFwiN0NGQzAwXCIsXG4gICAgbGVtb25jaGlmZm9uOiBcIkZGRkFDRFwiLFxuICAgIGxpZ2h0Ymx1ZTogXCJBREQ4RTZcIixcbiAgICBsaWdodGNvcmFsOiBcIkYwODA4MFwiLFxuICAgIGxpZ2h0Y3lhbjogXCJFMEZGRkZcIixcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogXCJGQUZBRDJcIixcbiAgICBsaWdodGdyYXk6IFwiRDNEM0QzXCIsXG4gICAgbGlnaHRncmVlbjogXCI5MEVFOTBcIixcbiAgICBsaWdodGdyZXk6IFwiRDNEM0QzXCIsXG4gICAgbGlnaHRwaW5rOiBcIkZGQjZDMVwiLFxuICAgIGxpZ2h0c2FsbW9uOiBcIkZGQTA3QVwiLFxuICAgIGxpZ2h0c2VhZ3JlZW46IFwiMjBCMkFBXCIsXG4gICAgbGlnaHRza3libHVlOiBcIjg3Q0VGQVwiLFxuICAgIGxpZ2h0c2xhdGVncmF5OiBcIjc3ODg5OVwiLFxuICAgIGxpZ2h0c2xhdGVncmV5OiBcIjc3ODg5OVwiLFxuICAgIGxpZ2h0c3RlZWxibHVlOiBcIkIwQzRERVwiLFxuICAgIGxpZ2h0eWVsbG93OiBcIkZGRkZFMFwiLFxuICAgIGxpbWU6IFwiMDBGRjAwXCIsXG4gICAgbGltZWdyZWVuOiBcIjMyQ0QzMlwiLFxuICAgIGxpbmVuOiBcIkZBRjBFNlwiLFxuICAgIG1hZ2VudGE6IFwiRkYwMEZGXCIsXG4gICAgbWFyb29uOiBcIjgwMDAwMFwiLFxuICAgIG1lZGl1bWFxdWFtYXJpbmU6IFwiNjZDREFBXCIsXG4gICAgbWVkaXVtYmx1ZTogXCIwMDAwQ0RcIixcbiAgICBtZWRpdW1vcmNoaWQ6IFwiQkE1NUQzXCIsXG4gICAgbWVkaXVtcHVycGxlOiBcIjkzNzBEQlwiLFxuICAgIG1lZGl1bXNlYWdyZWVuOiBcIjNDQjM3MVwiLFxuICAgIG1lZGl1bXNsYXRlYmx1ZTogXCI3QjY4RUVcIixcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogXCIwMEZBOUFcIixcbiAgICBtZWRpdW10dXJxdW9pc2U6IFwiNDhEMUNDXCIsXG4gICAgbWVkaXVtdmlvbGV0cmVkOiBcIkM3MTU4NVwiLFxuICAgIG1pZG5pZ2h0Ymx1ZTogXCIxOTE5NzBcIixcbiAgICBtaW50Y3JlYW06IFwiRjVGRkZBXCIsXG4gICAgbWlzdHlyb3NlOiBcIkZGRTRFMVwiLFxuICAgIG1vY2Nhc2luOiBcIkZGRTRCNVwiLFxuICAgIG5hdmFqb3doaXRlOiBcIkZGREVBRFwiLFxuICAgIG5hdnk6IFwiMDAwMDgwXCIsXG4gICAgb2xkbGFjZTogXCJGREY1RTZcIixcbiAgICBvbGl2ZTogXCI4MDgwMDBcIixcbiAgICBvbGl2ZWRyYWI6IFwiNkI4RTIzXCIsXG4gICAgb3JhbmdlOiBcIkZGQTUwMFwiLFxuICAgIG9yYW5nZXJlZDogXCJGRjQ1MDBcIixcbiAgICBvcmNoaWQ6IFwiREE3MEQ2XCIsXG4gICAgcGFsZWdvbGRlbnJvZDogXCJFRUU4QUFcIixcbiAgICBwYWxlZ3JlZW46IFwiOThGQjk4XCIsXG4gICAgcGFsZXR1cnF1b2lzZTogXCJBRkVFRUVcIixcbiAgICBwYWxldmlvbGV0cmVkOiBcIkRCNzA5M1wiLFxuICAgIHBhcGF5YXdoaXA6IFwiRkZFRkQ1XCIsXG4gICAgcGVhY2hwdWZmOiBcIkZGREFCOVwiLFxuICAgIHBlcnU6IFwiQ0Q4NTNGXCIsXG4gICAgcGluazogXCJGRkMwQ0JcIixcbiAgICBwbHVtOiBcIkREQTBERFwiLFxuICAgIHBvd2RlcmJsdWU6IFwiQjBFMEU2XCIsXG4gICAgcHVycGxlOiBcIjgwMDA4MFwiLFxuICAgIHJlZDogXCJGRjAwMDBcIixcbiAgICByb3N5YnJvd246IFwiQkM4RjhGXCIsXG4gICAgcm95YWxibHVlOiBcIjQxNjlFMVwiLFxuICAgIHNhZGRsZWJyb3duOiBcIjhCNDUxM1wiLFxuICAgIHNhbG1vbjogXCJGQTgwNzJcIixcbiAgICBzYW5keWJyb3duOiBcIkY0QTQ2MFwiLFxuICAgIHNlYWdyZWVuOiBcIjJFOEI1N1wiLFxuICAgIHNlYXNoZWxsOiBcIkZGRjVFRVwiLFxuICAgIHNpZW5uYTogXCJBMDUyMkRcIixcbiAgICBzaWx2ZXI6IFwiQzBDMEMwXCIsXG4gICAgc2t5Ymx1ZTogXCI4N0NFRUJcIixcbiAgICBzbGF0ZWJsdWU6IFwiNkE1QUNEXCIsXG4gICAgc2xhdGVncmF5OiBcIjcwODA5MFwiLFxuICAgIHNsYXRlZ3JleTogXCI3MDgwOTBcIixcbiAgICBzbm93OiBcIkZGRkFGQVwiLFxuICAgIHNwcmluZ2dyZWVuOiBcIjAwRkY3RlwiLFxuICAgIHN0ZWVsYmx1ZTogXCI0NjgyQjRcIixcbiAgICB0YW46IFwiRDJCNDhDXCIsXG4gICAgdGVhbDogXCIwMDgwODBcIixcbiAgICB0aGlzdGxlOiBcIkQ4QkZEOFwiLFxuICAgIHRvbWF0bzogXCJGRjYzNDdcIixcbiAgICB0dXJxdW9pc2U6IFwiNDBFMEQwXCIsXG4gICAgdmlvbGV0OiBcIkVFODJFRVwiLFxuICAgIHdoZWF0OiBcIkY1REVCM1wiLFxuICAgIHdoaXRlOiBcIkZGRkZGRlwiLFxuICAgIHdoaXRlc21va2U6IFwiRjVGNUY1XCIsXG4gICAgeWVsbG93OiBcIkZGRkYwMFwiLFxuICAgIHllbGxvd2dyZWVuOiBcIjlBQ0QzMlwiXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJhaW5ib3dcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1JhaW5ib3dWaXMuanMiXSwic291cmNlUm9vdCI6IiJ9