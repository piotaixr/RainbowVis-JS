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
	        key: 'colorAt',
	        value: function colorAt(number) {
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
	                return this.gradients[0].colorAt(number);
	            } else {
	                var segment = (this.maxNum - this.minNum) / this.gradients.length;
	                var index = Math.min(Math.floor((Math.max(number, this.minNum) - this.minNum) / segment), this.gradients.length - 1);
	                return this.gradients[index].colorAt(number);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGM5NDljYzMxZGU1NTI0MTJkMzkiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vUmFpbmJvd1Zpcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJyYWluYm93IiwicyIsImkiLCJoZXgiLCJjb2xvckF0Iiwic2V0U3BlY3RydW0iLCJzZXROdW1iZXJSYW5nZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJ3YXR0YWdlcyIsImhlYXRtYXAiLCJ0YWJsZSIsImxlbmd0aCIsImFwcGxpYW5jZSIsIndhdHRzIiwiaGV4Q29sb3VyIiwiUkFJTkJPV19XSURUSCIsIlJBSU5CT1dfUkFESVVTIiwicmFpbmJvdzIiLCJjYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImxpbmVXaWR0aCIsImJlZ2luUGF0aCIsImFyYyIsIndpZHRoIiwiTWF0aCIsIlBJIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJDb2xvckdyYWRpZW50Iiwic3RhcnQiLCJlbmQiLCJtaW4iLCJtYXgiLCJzdGFydENvbG91ciIsImdldEhleENvbG9yIiwiZW5kQ29sb3VyIiwibWluTnVtIiwibWF4TnVtIiwiY29sb3VyU3RhcnQiLCJjb2xvdXJFbmQiLCJtaW5OdW1iZXIiLCJtYXhOdW1iZXIiLCJSYW5nZUVycm9yIiwibnVtYmVyIiwiY2FsY0hleCIsInN1YnN0cmluZyIsImNoYW5uZWxTdGFydF9CYXNlMTYiLCJjaGFubmVsRW5kX0Jhc2UxNiIsIm51bSIsIm51bVJhbmdlIiwiY1N0YXJ0X0Jhc2UxMCIsInBhcnNlSW50IiwiY0VuZF9CYXNlMTAiLCJjUGVyVW5pdCIsImNfQmFzZTEwIiwicm91bmQiLCJmb3JtYXRIZXgiLCJ0b1N0cmluZyIsInN0cmluZyIsInJlZ2V4IiwidGVzdCIsImlzSGV4Q29sb3IiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJjb2xvck5hbWVzIiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsIlJhaW5ib3ciLCJjb2xvcnMiLCJncmFkaWVudHMiLCJzZXRDb2xvcnMiLCJzcGVjdHJ1bSIsImluY3JlbWVudCIsImZpcnN0R3JhZGllbnQiLCJjb2xvdXJzIiwic3BhY2VTaXplIiwicHJldlZhbHVlIiwicHJldkNvbG9yIiwidmFsdWUiLCJjb2xvciIsInB1c2giLCJhcmd1bWVudHMiLCJhcnJheSIsImlzTmFOIiwiVHlwZUVycm9yIiwic2VnbWVudCIsImluZGV4IiwiZmxvb3IiLCJhbGljZWJsdWUiLCJhbnRpcXVld2hpdGUiLCJhcXVhIiwiYXF1YW1hcmluZSIsImF6dXJlIiwiYmVpZ2UiLCJiaXNxdWUiLCJibGFjayIsImJsYW5jaGVkYWxtb25kIiwiYmx1ZSIsImJsdWV2aW9sZXQiLCJicm93biIsImJ1cmx5d29vZCIsImNhZGV0Ymx1ZSIsImNoYXJ0cmV1c2UiLCJjaG9jb2xhdGUiLCJjb3JhbCIsImNvcm5mbG93ZXJibHVlIiwiY29ybnNpbGsiLCJjcmltc29uIiwiY3lhbiIsImRhcmtibHVlIiwiZGFya2N5YW4iLCJkYXJrZ29sZGVucm9kIiwiZGFya2dyYXkiLCJkYXJrZ3JlZW4iLCJkYXJrZ3JleSIsImRhcmtraGFraSIsImRhcmttYWdlbnRhIiwiZGFya29saXZlZ3JlZW4iLCJkYXJrb3JhbmdlIiwiZGFya29yY2hpZCIsImRhcmtyZWQiLCJkYXJrc2FsbW9uIiwiZGFya3NlYWdyZWVuIiwiZGFya3NsYXRlYmx1ZSIsImRhcmtzbGF0ZWdyYXkiLCJkYXJrc2xhdGVncmV5IiwiZGFya3R1cnF1b2lzZSIsImRhcmt2aW9sZXQiLCJkZWVwcGluayIsImRlZXBza3libHVlIiwiZGltZ3JheSIsImRpbWdyZXkiLCJkb2RnZXJibHVlIiwiZmlyZWJyaWNrIiwiZmxvcmFsd2hpdGUiLCJmb3Jlc3RncmVlbiIsImZ1Y2hzaWEiLCJnYWluc2Jvcm8iLCJnaG9zdHdoaXRlIiwiZ29sZCIsImdvbGRlbnJvZCIsImdyYXkiLCJncmVlbiIsImdyZWVueWVsbG93IiwiZ3JleSIsImhvbmV5ZGV3IiwiaG90cGluayIsImluZGlhbnJlZCIsImluZGlnbyIsIml2b3J5Iiwia2hha2kiLCJsYXZlbmRlciIsImxhdmVuZGVyYmx1c2giLCJsYXduZ3JlZW4iLCJsZW1vbmNoaWZmb24iLCJsaWdodGJsdWUiLCJsaWdodGNvcmFsIiwibGlnaHRjeWFuIiwibGlnaHRnb2xkZW5yb2R5ZWxsb3ciLCJsaWdodGdyYXkiLCJsaWdodGdyZWVuIiwibGlnaHRncmV5IiwibGlnaHRwaW5rIiwibGlnaHRzYWxtb24iLCJsaWdodHNlYWdyZWVuIiwibGlnaHRza3libHVlIiwibGlnaHRzbGF0ZWdyYXkiLCJsaWdodHNsYXRlZ3JleSIsImxpZ2h0c3RlZWxibHVlIiwibGlnaHR5ZWxsb3ciLCJsaW1lIiwibGltZWdyZWVuIiwibGluZW4iLCJtYWdlbnRhIiwibWFyb29uIiwibWVkaXVtYXF1YW1hcmluZSIsIm1lZGl1bWJsdWUiLCJtZWRpdW1vcmNoaWQiLCJtZWRpdW1wdXJwbGUiLCJtZWRpdW1zZWFncmVlbiIsIm1lZGl1bXNsYXRlYmx1ZSIsIm1lZGl1bXNwcmluZ2dyZWVuIiwibWVkaXVtdHVycXVvaXNlIiwibWVkaXVtdmlvbGV0cmVkIiwibWlkbmlnaHRibHVlIiwibWludGNyZWFtIiwibWlzdHlyb3NlIiwibW9jY2FzaW4iLCJuYXZham93aGl0ZSIsIm5hdnkiLCJvbGRsYWNlIiwib2xpdmUiLCJvbGl2ZWRyYWIiLCJvcmFuZ2UiLCJvcmFuZ2VyZWQiLCJvcmNoaWQiLCJwYWxlZ29sZGVucm9kIiwicGFsZWdyZWVuIiwicGFsZXR1cnF1b2lzZSIsInBhbGV2aW9sZXRyZWQiLCJwYXBheWF3aGlwIiwicGVhY2hwdWZmIiwicGVydSIsInBpbmsiLCJwbHVtIiwicG93ZGVyYmx1ZSIsInB1cnBsZSIsInJlZCIsInJvc3licm93biIsInJveWFsYmx1ZSIsInNhZGRsZWJyb3duIiwic2FsbW9uIiwic2FuZHlicm93biIsInNlYWdyZWVuIiwic2Vhc2hlbGwiLCJzaWVubmEiLCJzaWx2ZXIiLCJza3libHVlIiwic2xhdGVibHVlIiwic2xhdGVncmF5Iiwic2xhdGVncmV5Iiwic25vdyIsInNwcmluZ2dyZWVuIiwic3RlZWxibHVlIiwidGFuIiwidGVhbCIsInRoaXN0bGUiLCJ0b21hdG8iLCJ0dXJxdW9pc2UiLCJ2aW9sZXQiLCJ3aGVhdCIsIndoaXRlIiwid2hpdGVzbW9rZSIsInllbGxvdyIsInllbGxvd2dyZWVuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUFFQUEsUUFBT0MsTUFBUCxHQUFnQixZQUFVO0FBQ3RCLFNBQUk7QUFDQTtBQUNBO0FBQ0EsYUFBSUMsVUFBVSwwQkFBZCxDQUhBLENBRzZCO0FBQzdCLGFBQUlDLElBQUksa0JBQVI7QUFDQSxjQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsS0FBSyxHQUFyQixFQUEwQkEsSUFBSUEsSUFBSSxFQUFsQyxFQUFzQztBQUNsQyxpQkFBSUMsTUFBTSxNQUFNSCxRQUFRSSxPQUFSLENBQWdCRixDQUFoQixDQUFoQjtBQUNBRCxrQkFBSyx3QkFBd0JFLEdBQXhCLEdBQThCLElBQTlCLEdBQXFDRCxDQUFyQyxHQUF5QyxTQUF6QyxHQUFxREMsR0FBckQsR0FBMkQsY0FBaEU7QUFDSDs7QUFFRDtBQUNBRixjQUFLLGlCQUFMO0FBQ0FELGlCQUFRSyxXQUFSLENBQW9CLEtBQXBCLEVBQTJCLFFBQTNCLEVBQXFDLFNBQXJDO0FBQ0FMLGlCQUFRTSxjQUFSLENBQXVCLENBQUMsR0FBeEIsRUFBNkIsR0FBN0I7QUFDQSxjQUFLLElBQUlKLEtBQUksQ0FBQyxDQUFkLEVBQWlCQSxNQUFL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SWZDLFVBQUssUUF6SVU7QUEwSWZDLFdBQU0sUUExSVM7QUEySWZDLGNBQVMsUUEzSU07QUE0SWZDLGFBQVEsUUE1SU87QUE2SWZDLGdCQUFXLFFBN0lJO0FBOElmQyxhQUFRLFFBOUlPO0FBK0lmQyxZQUFPLFFBL0lRO0FBZ0pmQyxZQUFPLFFBaEpRO0FBaUpmQyxpQkFBWSxRQWpKRztBQWtKZkMsYUFBUSxRQWxKTztBQW1KZkMsa0JBQWE7QUFuSkUsRUFBbkI7O21CQXVKZXZLLE8iLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhjOTQ5Y2MzMWRlNTUyNDEyZDM5IiwiaW1wb3J0IFJhaW5ib3cgZnJvbSAnLi9SYWluYm93VmlzJ1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICB0cnkge1xuICAgICAgICAvLyBNYXBwaW5nc1xuICAgICAgICAvLyBEZWZhdWx0XG4gICAgICAgIGxldCByYWluYm93ID0gbmV3IFJhaW5ib3coKTsgLy8gYnkgZGVmYXVsdCwgcmFuZ2UgaXMgMCB0byAxMDBcbiAgICAgICAgbGV0IHMgPSAnPGgzPkRlZmF1bHQ8L2gzPic7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDEwMDsgaSA9IGkgKyAxMCkge1xuICAgICAgICAgICAgbGV0IGhleCA9ICcjJyArIHJhaW5ib3cuY29sb3JBdChpKTtcbiAgICAgICAgICAgIHMgKz0gJzxzcGFuIHN0eWxlPVwiY29sb3I6JyArIGhleCArICdcIj4nICsgaSArICcgLSZndDsgJyArIGhleCArICc8L3NwYW4+PGJyLz4nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3VzdG9tXG4gICAgICAgIHMgKz0gJzxoMz5DdXN0b208L2gzPic7XG4gICAgICAgIHJhaW5ib3cuc2V0U3BlY3RydW0oJ3JlZCcsICdGRkZGRkYnLCAnIzAwZmYwMCcpO1xuICAgICAgICByYWluYm93LnNldE51bWJlclJhbmdlKC0wLjUsIDAuNSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAtNTsgaSA8PSA1IDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaGV4ID0gJyMnICsgcmFpbmJvdy5jb2xvckF0KGkvMTApO1xuICAgICAgICAgICAgcyArPSAnPHNwYW4gc3R5bGU9XCJjb2xvcjonICsgaGV4ICsgJ1wiPicgKyBpLzEwICsgJyAtJmd0OyAnICsgaGV4ICsgJzwvc3Bhbj48YnIvPic7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBwaW5nc1wiKS5pbm5lckhUTUwgPSBzO1xuXG4gICAgICAgIC8vIFdhdHRhZ2VzXG4gICAgICAgIGNvbnN0IHdhdHRhZ2VzID0gW1xuICAgICAgICAgICAgW1wiQ2xvdGhlcyBEcnllclwiLDUwMDBdLFxuICAgICAgICAgICAgW1wiQWlyIENvbmRpdGlvbmVyICgzNiwwMDAgQlRVKVwiLDQ1MDBdLFxuICAgICAgICAgICAgW1wiV2F0ZXIgSGVhdGVyIChRdWljayBSZWNvdmVyeSlcIiw0NTAwXSxcbiAgICAgICAgICAgIFtcIlJhbmdlIChPdmVuKVwiLDI2NjBdLFxuICAgICAgICAgICAgW1wiUmFuZ2UgKFNlbGYgQ2xlYW5pbmcgQ3ljbGUpXCIsMjUwMF0sXG4gICAgICAgICAgICBbXCJQb3dlciBUb29scyAoQ2lyY3VsYXIgU2F3KVwiLDE4MDBdLFxuICAgICAgICAgICAgW1wiVmFjdXVtIENsZWFuZXJcIiwxNTYwXSxcbiAgICAgICAgICAgIFtcIkFpciBDb25kaXRpb25lciAoMTIsMDAwIEJUVSlcIiwxNTAwXSxcbiAgICAgICAgICAgIFtcIkNvbnZlY3Rpb24gT3ZlblwiLDE1MDBdLFxuICAgICAgICAgICAgW1wiQ3VybGluZyBJcm9uXCIsMTUwMF0sXG4gICAgICAgICAgICBbXCJIZWF0ZXIgKFBvcnRhYmxlKVwiLDE1MDBdLFxuICAgICAgICAgICAgW1wiSmFjdXp6aSAoTWFpbnRhaW4gVGVtcGVyYXR1cmUsIDIgUGVyc29uKVwiLDE1MDBdLFxuICAgICAgICAgICAgW1wiTWljcm93YXZlIE92ZW5cIiwxNTAwXSxcbiAgICAgICAgICAgIFtcIlRvYXN0ZXJcIiwxNDAwXSxcbiAgICAgICAgICAgIFtcIkRpc2h3YXNoZXIgKERyeSBDeWNsZSlcIiwxMjAwXSxcbiAgICAgICAgICAgIFtcIkZyeSBQYW5cIiwxMjAwXSxcbiAgICAgICAgICAgIFtcIldhZmZsZSBJcm9uXCIsMTIwMF0sXG4gICAgICAgICAgICBbXCJDb2ZmZWUgTWFrZXIgKEF1dG8gRHJpcClcIiwxMTY1XSxcbiAgICAgICAgICAgIFtcIkhhaXIgRHJ5ZXIgKEhhbmQgSGVsZClcIiwxMDAwXSxcbiAgICAgICAgICAgIFtcIkhlYXRlciAoQXV0byBFbmdpbmUsIFdpbnRlcilcIiwxMDAwXSxcbiAgICAgICAgICAgIFtcIklyb25cIiwxMDAwXSxcbiAgICAgICAgICAgIFtcIk1vdG9yICgxIEhQKVwiLDEwMDBdLFxuICAgICAgICAgICAgW1wiQXV0byBFbmdpbmUgSGVhdGVyXCIsNjAwXSxcbiAgICAgICAgICAgIFtcIldhc2hlclwiLDUxMl0sXG4gICAgICAgICAgICBbXCJTdW1wIFB1bXAgKDEvMiBIUClcIiw1MDBdLFxuICAgICAgICAgICAgW1wiV2F0ZXIgUHVtcCAoMS8yIEhQKVwiLDQ2MF0sXG4gICAgICAgICAgICBbXCJEZWh1bWlkaWZpZXIgKDIwIFBpbnRzLCBTdW1tZXIpXCIsNDUwXSxcbiAgICAgICAgICAgIFtcIlJlZnJpZ2VyYXRvci9GcmVlemVyIChGcm9zdGZyZWUsMTcuNWN1LmZ0LilcIiw0NTBdLFxuICAgICAgICAgICAgW1wiRnJlZXplciAoQXV0b21hdGljIERlZnJvc3QgMTUgY3UuIGZ0LilcIiw0NDBdLFxuICAgICAgICAgICAgW1wiRGlzcG9zYWxcIiw0MjBdLFxuICAgICAgICAgICAgW1wiQ29tcGFjdG9yXCIsNDAwXSxcbiAgICAgICAgICAgIFtcIkZhbiAoQXR0aWMpXCIsNDAwXSxcbiAgICAgICAgICAgIFtcIkJsZW5kZXJcIiwzODVdLFxuICAgICAgICAgICAgW1wiV2F0ZXJiZWQgSGVhdGVyIChRdWVlbiBTaXplKVwiLDM3NV0sXG4gICAgICAgICAgICBbXCJDb21wdXRlciAoV2l0aCBNb25pdG9yIGFuZCBQcmludGVyKVwiLDM2NV0sXG4gICAgICAgICAgICBbXCJTYXRlbGxpdGUgRGlzaCAoSW5jbHVkZXMgUmVjZWl2ZXIpXCIsMzYwXSxcbiAgICAgICAgICAgIFtcIkZyZWV6ZXIgKE1hbnVhbCBEZWZyb3N0LCAxNSBjdS4gZnQuKVwiLDM1MF0sXG4gICAgICAgICAgICBbXCJHYXJhZ2UgRG9vciBPcGVuZXJcIiwzNTBdLFxuICAgICAgICAgICAgW1wiSGVhdGluZyBTeXN0ZW0gKFdhcm0gQWlyIEZhbilcIiwzMTJdLFxuICAgICAgICAgICAgW1wiQ0QsIFRhcGUsIFJhZGlvLCBSZWNlaXZlciBTeXN0ZW1cIiwyNTBdLFxuICAgICAgICAgICAgW1wiSGVhdCBMYW1wXCIsMjUwXSxcbiAgICAgICAgICAgIFtcIkRpc2h3YXNoZXIgKFdhc2ggQ3ljbGUpXCIsMjAwXSxcbiAgICAgICAgICAgIFtcIlRlbGV2aXNpb24gKENvbG9yLCBTb2xpZCBTdGF0ZSlcIiwyMDBdLFxuICAgICAgICAgICAgW1wiSGVhdCBUYXBlICgzMGZ0LiwgV2ludGVyKVwiLDE4MF0sXG4gICAgICAgICAgICBbXCJIdW1pZGlmaWVyIChXaW50ZXIpXCIsMTc3XSxcbiAgICAgICAgICAgIFtcIkVsZWN0cmljIEJsYW5rZXRcIiwxNzVdLFxuICAgICAgICAgICAgW1wiQmF0dGVyeSBDaGFyZ2VyIChDYXIpXCIsMTUwXSxcbiAgICAgICAgICAgIFtcIkxpZ2h0aW5nIChPdXRkb29yIEZsb29yKVwiLDEyMF0sXG4gICAgICAgICAgICBbXCJNaXhlciwgSGFuZFwiLDEwMF0sXG4gICAgICAgICAgICBbXCJGYW4gKENlaWxpbmcpXCIsODBdLFxuICAgICAgICAgICAgW1wiTGlnaHRpbmcgKEluY2FuZGVzY2VudClcIiw3NV0sXG4gICAgICAgICAgICBbXCJSYWRpb1wiLDcxXSxcbiAgICAgICAgICAgIFtcIkJ1ZyBaYXBwZXJcIiw0MF0sXG4gICAgICAgICAgICBbXCJMaWdodGluZyAoRmx1b3Jlc2NlbnQpXCIsNDBdLFxuICAgICAgICAgICAgW1wiVkNSL0RWRFwiLDIxXSxcbiAgICAgICAgICAgIFtcIkxpZ2h0aW5nIChDb21wYWN0IEZsdW9yZXNjZW50KVwiLDE4XSxcbiAgICAgICAgICAgIFtcIkNsb2NrXCIsM11cbiAgICAgICAgXTtcblxuICAgICAgICBsZXQgaGVhdG1hcCA9IG5ldyBSYWluYm93KCk7XG4gICAgICAgIGhlYXRtYXAuc2V0U3BlY3RydW0oJ2JsYWNrJywgJ2JsdWUnLCAnYXF1YScsICdsaW1lJywgJ3llbGxvdycsICdyZWQnKTtcbiAgICAgICAgaGVhdG1hcC5zZXROdW1iZXJSYW5nZSgwLCA1MDAwKTtcbiAgICAgICAgbGV0IHRhYmxlID0gJzx0YWJsZT48dHI+PHRoPkFwcGxpYW5jZTwvdGg+PHRoPlR5cGljYWwgV2F0dGFnZTwvdGg+PC90cj4nO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdhdHRhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXBwbGlhbmNlID0gd2F0dGFnZXNbaV1bMF07XG4gICAgICAgICAgICBsZXQgd2F0dHMgPSB3YXR0YWdlc1tpXVsxXTtcbiAgICAgICAgICAgIHRhYmxlICs9ICc8dHI+PHRkPicgKyBhcHBsaWFuY2UgKyAnPC90ZD4nO1xuICAgICAgICAgICAgbGV0IGhleENvbG91ciA9ICcjJyArIGhlYXRtYXAuY29sb3JBdCh3YXR0cyk7XG4gICAgICAgICAgICB0YWJsZSArPSAnPHRkIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonICsgaGV4Q29sb3VyICsgJzsgY29sb3I6ICNmZmZcIj4nICsgd2F0dHMgKyAnPC90ZD48L3RyPic7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUgKz0gJzwvdGFibGU+JztcbiAgICAgICAgdGFibGUgKz0gJzxwPlNvdXJjZTogPGEgaHJlZj1cImh0dHA6Ly93d3cuY29ybmh1c2tlci1wb3dlci5jb20vaG91c2Vob2xkYXBwbGlhbmNlcy5hc3BcIj5PcGVyYXRpbmcgQ29zdHMgb2YgSG91c2Vob2xkIEFwcGxpYW5jZXM8L2E+PC9wPic7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2F0dGFnZXNcIikuaW5uZXJIVE1MID0gdGFibGU7XG5cbiAgICAgICAgLy8gQ2FudmFzIERyYXdpbmdcbiAgICAgICAgbGV0IFJBSU5CT1dfV0lEVEggPSA2MDtcbiAgICAgICAgbGV0IFJBSU5CT1dfUkFESVVTID0gMTMwO1xuICAgICAgICBsZXQgcmFpbmJvdzIgPSBuZXcgUmFpbmJvdygpO1xuICAgICAgICByYWluYm93Mi5zZXROdW1iZXJSYW5nZSgxLCBSQUlOQk9XX1dJRFRIKTtcbiAgICAgICAgcmFpbmJvdzIuc2V0U3BlY3RydW0oJ0ZGMDAwMCcsICdGRkZGMDAnLCAnMDBGRjAwJywgJzAwRkZGRicsICcwMDAwRkYnLCAnRkYwMEZGJyk7XG5cbiAgICAgICAgICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTXlSYWluYm93Jyk7XG4gICAgICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IFJBSU5CT1dfV0lEVEg7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQuYXJjKGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy53aWR0aCAvIDIsIFJBSU5CT1dfUkFESVVTIC0gaSArIDEsIE1hdGguUEksIDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJyMnICsgcmFpbmJvdzIuY29sb3JBdChpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V4YW1wbGUuanN4IiwiLypcbiBSYWluYm93VmlzLUpTXG4gUmVsZWFzZWQgdW5kZXIgRWNsaXBzZSBQdWJsaWMgTGljZW5zZSAtIHYgMS4wXG4gKi9cblxuY2xhc3MgQ29sb3JHcmFkaWVudCB7XG4gICAgY29uc3RydWN0b3Ioc3RhcnQsIGVuZCwgbWluLCBtYXgpIHtcbiAgICAgICAgdGhpcy5zdGFydENvbG91ciA9IENvbG9yR3JhZGllbnQuZ2V0SGV4Q29sb3Ioc3RhcnQpO1xuICAgICAgICB0aGlzLmVuZENvbG91ciA9IENvbG9yR3JhZGllbnQuZ2V0SGV4Q29sb3IoZW5kKTtcbiAgICAgICAgdGhpcy5taW5OdW0gPSBtaW47XG4gICAgICAgIHRoaXMubWF4TnVtID0gbWF4O1xuICAgIH1cblxuICAgIHNldEdyYWRpZW50KGNvbG91clN0YXJ0LCBjb2xvdXJFbmQpIHtcbiAgICAgICAgdGhpcy5zdGFydENvbG91ciA9IENvbG9yR3JhZGllbnQuZ2V0SGV4Q29sb3IoY29sb3VyU3RhcnQpO1xuICAgICAgICB0aGlzLmVuZENvbG91ciA9IENvbG9yR3JhZGllbnQuZ2V0SGV4Q29sb3IoY29sb3VyRW5kKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgc2V0TnVtYmVyUmFuZ2UobWluTnVtYmVyLCBtYXhOdW1iZXIpIHtcbiAgICAgICAgaWYgKG1heE51bWJlciA+IG1pbk51bWJlcikge1xuICAgICAgICAgICAgdGhpcy5taW5OdW0gPSBtaW5OdW1iZXI7XG4gICAgICAgICAgICB0aGlzLm1heE51bSA9IG1heE51bWJlcjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWF4TnVtYmVyICgnICsgbWF4TnVtYmVyICsgJykgaXMgbm90IGdyZWF0ZXIgdGhhbiBtaW5OdW1iZXIgKCcgKyBtaW5OdW1iZXIgKyAnKScpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbG9yQXQobnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNIZXgobnVtYmVyLCB0aGlzLnN0YXJ0Q29sb3VyLnN1YnN0cmluZygwLCAyKSwgdGhpcy5lbmRDb2xvdXIuc3Vic3RyaW5nKDAsIDIpKVxuICAgICAgICAgICAgKyB0aGlzLmNhbGNIZXgobnVtYmVyLCB0aGlzLnN0YXJ0Q29sb3VyLnN1YnN0cmluZygyLCA0KSwgdGhpcy5lbmRDb2xvdXIuc3Vic3RyaW5nKDIsIDQpKVxuICAgICAgICAgICAgKyB0aGlzLmNhbGNIZXgobnVtYmVyLCB0aGlzLnN0YXJ0Q29sb3VyLnN1YnN0cmluZyg0LCA2KSwgdGhpcy5lbmRDb2xvdXIuc3Vic3RyaW5nKDQsIDYpKTtcbiAgICB9O1xuXG4gICAgY2FsY0hleChudW1iZXIsIGNoYW5uZWxTdGFydF9CYXNlMTYsIGNoYW5uZWxFbmRfQmFzZTE2KSB7XG4gICAgICAgIGxldCBudW0gPSBudW1iZXI7XG4gICAgICAgIGlmIChudW0gPCB0aGlzLm1pbk51bSkge1xuICAgICAgICAgICAgbnVtID0gdGhpcy5taW5OdW07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bSA+IHRoaXMubWF4TnVtKSB7XG4gICAgICAgICAgICBudW0gPSB0aGlzLm1heE51bTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbnVtUmFuZ2UgPSB0aGlzLm1heE51bSAtIHRoaXMubWluTnVtO1xuICAgICAgICBsZXQgY1N0YXJ0X0Jhc2UxMCA9IHBhcnNlSW50KGNoYW5uZWxTdGFydF9CYXNlMTYsIDE2KTtcbiAgICAgICAgbGV0IGNFbmRfQmFzZTEwID0gcGFyc2VJbnQoY2hhbm5lbEVuZF9CYXNlMTYsIDE2KTtcbiAgICAgICAgbGV0IGNQZXJVbml0ID0gKGNFbmRfQmFzZTEwIC0gY1N0YXJ0X0Jhc2UxMCkgLyBudW1SYW5nZTtcbiAgICAgICAgbGV0IGNfQmFzZTEwID0gTWF0aC5yb3VuZChjUGVyVW5pdCAqIChudW0gLSB0aGlzLm1pbk51bSkgKyBjU3RhcnRfQmFzZTEwKTtcblxuICAgICAgICByZXR1cm4gQ29sb3JHcmFkaWVudC5mb3JtYXRIZXgoY19CYXNlMTAudG9TdHJpbmcoMTYpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0SGV4KGhleCkge1xuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuICcwJyArIGhleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBoZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaXNIZXhDb2xvcihzdHJpbmcpIHtcbiAgICAgICAgbGV0IHJlZ2V4ID0gL14jP1swLTlhLWZBLUZdezZ9JC9pO1xuXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KHN0cmluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc3RhdGljIGdldEhleENvbG9yKHN0cmluZykge1xuICAgICAgICBpZiAoQ29sb3JHcmFkaWVudC5pc0hleENvbG9yKHN0cmluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGggLSA2LCBzdHJpbmcubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuYW1lID0gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoY29sb3JOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvck5hbWVzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cmluZyArICcgaXMgbm90IGEgdmFsaWQgY29sb3VyLicpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBSYWluYm93IHtcbiAgICBjb25zdHJ1Y3RvcihtaW4gPSAwLCBtYXggPSAxMDAsIGNvbG9ycyA9IFsnZmYwMDAwJywgJ2ZmZmYwMCcsICcwMGZmMDAnLCAnMDAwMGZmJ10pIHtcbiAgICAgICAgdGhpcy5ncmFkaWVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLm1pbk51bSA9IG1pbjtcbiAgICAgICAgdGhpcy5tYXhOdW0gPSBtYXg7XG4gICAgICAgIHRoaXMuc2V0Q29sb3JzKGNvbG9ycyk7XG4gICAgfVxuXG4gICAgc2V0Q29sb3JzKHNwZWN0cnVtKSB7XG4gICAgICAgIGlmIChzcGVjdHJ1bS5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhaW5ib3cgbXVzdCBoYXZlIHR3byBvciBtb3JlIGNvbG91cnMuJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaW5jcmVtZW50ID0gKHRoaXMubWF4TnVtIC0gdGhpcy5taW5OdW0pIC8gKHNwZWN0cnVtLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgbGV0IGZpcnN0R3JhZGllbnQgPSBuZXcgQ29sb3JHcmFkaWVudChzcGVjdHJ1bVswXSwgc3BlY3RydW1bMV0sIHRoaXMubWluTnVtLCB0aGlzLm1pbk51bSArIGluY3JlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmdyYWRpZW50cyA9IFtmaXJzdEdyYWRpZW50XTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzcGVjdHJ1bS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyYWRpZW50c1tpXSA9IG5ldyBDb2xvckdyYWRpZW50KHNwZWN0cnVtW2ldLCBzcGVjdHJ1bVtpICsgMV0sIHRoaXMubWluTnVtICsgaW5jcmVtZW50ICogaSwgdGhpcy5taW5OdW0gKyBpbmNyZW1lbnQgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jb2xvdXJzID0gc3BlY3RydW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmb3JtYXQgZXhhbXBsZTogW1swLCAnIzAwMDAwMCddLCBbMC4yLCAnI0ZGMDAwMCddLCBbMSwgJyNGRkZGRkYnXV1cbiAgICAgKiBAcGFyYW0gc3BlY3RydW1cbiAgICAgKi9cbiAgICBzZXRDb2xvckZyb21HcmFkaWVudChzcGVjdHJ1bSkge1xuICAgICAgICB0aGlzLmdyYWRpZW50cyA9IFtdO1xuICAgICAgICBsZXQgc3BhY2VTaXplID0gdGhpcy5tYXhOdW0gLSB0aGlzLm1pbk51bTtcbiAgICAgICAgbGV0IFtwcmV2VmFsdWUsIHByZXZDb2xvcl0gPSBzcGVjdHJ1bVswXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNwZWN0cnVtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgW3ZhbHVlLCBjb2xvcl0gPSBzcGVjdHJ1bVtpXTtcblxuICAgICAgICAgICAgdGhpcy5ncmFkaWVudHMucHVzaChuZXcgQ29sb3JHcmFkaWVudChwcmV2VmFsdWUsIHZhbHVlLCB0aGlzLm1pbk51bSArIHNwYWNlU2l6ZSAqIHByZXZDb2xvciwgdGhpcy5taW5OdW0gKyBzcGFjZVNpemUgKiBjb2xvcikpO1xuXG4gICAgICAgICAgICBwcmV2VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHByZXZDb2xvciA9IGNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIHNldFNwZWN0cnVtKCkge1xuICAgICAgICB0aGlzLnNldENvbG9ycyhhcmd1bWVudHMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBzZXRTcGVjdHJ1bUJ5QXJyYXkoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0Q29sb3JzKGFycmF5KTtcbiAgICB9O1xuXG4gICAgY29sb3JBdChudW1iZXIpIHtcbiAgICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IobnVtYmVyICsgJyBpcyBub3QgYSBudW1iZXInKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmdyYWRpZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYWRpZW50c1swXS5jb2xvckF0KG51bWJlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2VnbWVudCA9ICh0aGlzLm1heE51bSAtIHRoaXMubWluTnVtKSAvICh0aGlzLmdyYWRpZW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5taW4oTWF0aC5mbG9vcigoTWF0aC5tYXgobnVtYmVyLCB0aGlzLm1pbk51bSkgLSB0aGlzLm1pbk51bSkgLyBzZWdtZW50KSwgdGhpcy5ncmFkaWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncmFkaWVudHNbaW5kZXhdLmNvbG9yQXQobnVtYmVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzZXROdW1iZXJSYW5nZShtaW5OdW1iZXIsIG1heE51bWJlcikge1xuICAgICAgICBpZiAobWF4TnVtYmVyID4gbWluTnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLm1pbk51bSA9IG1pbk51bWJlcjtcbiAgICAgICAgICAgIHRoaXMubWF4TnVtID0gbWF4TnVtYmVyO1xuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcnModGhpcy5jb2xvdXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdtYXhOdW1iZXIgKCcgKyBtYXhOdW1iZXIgKyAnKSBpcyBub3QgZ3JlYXRlciB0aGFuIG1pbk51bWJlciAoJyArIG1pbk51bWJlciArICcpJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5cbi8vIEV4dGVuZGVkIGxpc3Qgb2YgQ1NTIGNvbG9ybmFtZXMgcyB0YWtlbiBmcm9tXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbmNvbnN0IGNvbG9yTmFtZXMgPSB7XG4gICAgYWxpY2VibHVlOiBcIkYwRjhGRlwiLFxuICAgIGFudGlxdWV3aGl0ZTogXCJGQUVCRDdcIixcbiAgICBhcXVhOiBcIjAwRkZGRlwiLFxuICAgIGFxdWFtYXJpbmU6IFwiN0ZGRkQ0XCIsXG4gICAgYXp1cmU6IFwiRjBGRkZGXCIsXG4gICAgYmVpZ2U6IFwiRjVGNURDXCIsXG4gICAgYmlzcXVlOiBcIkZGRTRDNFwiLFxuICAgIGJsYWNrOiBcIjAwMDAwMFwiLFxuICAgIGJsYW5jaGVkYWxtb25kOiBcIkZGRUJDRFwiLFxuICAgIGJsdWU6IFwiMDAwMEZGXCIsXG4gICAgYmx1ZXZpb2xldDogXCI4QTJCRTJcIixcbiAgICBicm93bjogXCJBNTJBMkFcIixcbiAgICBidXJseXdvb2Q6IFwiREVCODg3XCIsXG4gICAgY2FkZXRibHVlOiBcIjVGOUVBMFwiLFxuICAgIGNoYXJ0cmV1c2U6IFwiN0ZGRjAwXCIsXG4gICAgY2hvY29sYXRlOiBcIkQyNjkxRVwiLFxuICAgIGNvcmFsOiBcIkZGN0Y1MFwiLFxuICAgIGNvcm5mbG93ZXJibHVlOiBcIjY0OTVFRFwiLFxuICAgIGNvcm5zaWxrOiBcIkZGRjhEQ1wiLFxuICAgIGNyaW1zb246IFwiREMxNDNDXCIsXG4gICAgY3lhbjogXCIwMEZGRkZcIixcbiAgICBkYXJrYmx1ZTogXCIwMDAwOEJcIixcbiAgICBkYXJrY3lhbjogXCIwMDhCOEJcIixcbiAgICBkYXJrZ29sZGVucm9kOiBcIkI4ODYwQlwiLFxuICAgIGRhcmtncmF5OiBcIkE5QTlBOVwiLFxuICAgIGRhcmtncmVlbjogXCIwMDY0MDBcIixcbiAgICBkYXJrZ3JleTogXCJBOUE5QTlcIixcbiAgICBkYXJra2hha2k6IFwiQkRCNzZCXCIsXG4gICAgZGFya21hZ2VudGE6IFwiOEIwMDhCXCIsXG4gICAgZGFya29saXZlZ3JlZW46IFwiNTU2QjJGXCIsXG4gICAgZGFya29yYW5nZTogXCJGRjhDMDBcIixcbiAgICBkYXJrb3JjaGlkOiBcIjk5MzJDQ1wiLFxuICAgIGRhcmtyZWQ6IFwiOEIwMDAwXCIsXG4gICAgZGFya3NhbG1vbjogXCJFOTk2N0FcIixcbiAgICBkYXJrc2VhZ3JlZW46IFwiOEZCQzhGXCIsXG4gICAgZGFya3NsYXRlYmx1ZTogXCI0ODNEOEJcIixcbiAgICBkYXJrc2xhdGVncmF5OiBcIjJGNEY0RlwiLFxuICAgIGRhcmtzbGF0ZWdyZXk6IFwiMkY0RjRGXCIsXG4gICAgZGFya3R1cnF1b2lzZTogXCIwMENFRDFcIixcbiAgICBkYXJrdmlvbGV0OiBcIjk0MDBEM1wiLFxuICAgIGRlZXBwaW5rOiBcIkZGMTQ5M1wiLFxuICAgIGRlZXBza3libHVlOiBcIjAwQkZGRlwiLFxuICAgIGRpbWdyYXk6IFwiNjk2OTY5XCIsXG4gICAgZGltZ3JleTogXCI2OTY5NjlcIixcbiAgICBkb2RnZXJibHVlOiBcIjFFOTBGRlwiLFxuICAgIGZpcmVicmljazogXCJCMjIyMjJcIixcbiAgICBmbG9yYWx3aGl0ZTogXCJGRkZBRjBcIixcbiAgICBmb3Jlc3RncmVlbjogXCIyMjhCMjJcIixcbiAgICBmdWNoc2lhOiBcIkZGMDBGRlwiLFxuICAgIGdhaW5zYm9ybzogXCJEQ0RDRENcIixcbiAgICBnaG9zdHdoaXRlOiBcIkY4RjhGRlwiLFxuICAgIGdvbGQ6IFwiRkZENzAwXCIsXG4gICAgZ29sZGVucm9kOiBcIkRBQTUyMFwiLFxuICAgIGdyYXk6IFwiODA4MDgwXCIsXG4gICAgZ3JlZW46IFwiMDA4MDAwXCIsXG4gICAgZ3JlZW55ZWxsb3c6IFwiQURGRjJGXCIsXG4gICAgZ3JleTogXCI4MDgwODBcIixcbiAgICBob25leWRldzogXCJGMEZGRjBcIixcbiAgICBob3RwaW5rOiBcIkZGNjlCNFwiLFxuICAgIGluZGlhbnJlZDogXCJDRDVDNUNcIixcbiAgICBpbmRpZ286IFwiNEIwMDgyXCIsXG4gICAgaXZvcnk6IFwiRkZGRkYwXCIsXG4gICAga2hha2k6IFwiRjBFNjhDXCIsXG4gICAgbGF2ZW5kZXI6IFwiRTZFNkZBXCIsXG4gICAgbGF2ZW5kZXJibHVzaDogXCJGRkYwRjVcIixcbiAgICBsYXduZ3JlZW46IFwiN0NGQzAwXCIsXG4gICAgbGVtb25jaGlmZm9uOiBcIkZGRkFDRFwiLFxuICAgIGxpZ2h0Ymx1ZTogXCJBREQ4RTZcIixcbiAgICBsaWdodGNvcmFsOiBcIkYwODA4MFwiLFxuICAgIGxpZ2h0Y3lhbjogXCJFMEZGRkZcIixcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogXCJGQUZBRDJcIixcbiAgICBsaWdodGdyYXk6IFwiRDNEM0QzXCIsXG4gICAgbGlnaHRncmVlbjogXCI5MEVFOTBcIixcbiAgICBsaWdodGdyZXk6IFwiRDNEM0QzXCIsXG4gICAgbGlnaHRwaW5rOiBcIkZGQjZDMVwiLFxuICAgIGxpZ2h0c2FsbW9uOiBcIkZGQTA3QVwiLFxuICAgIGxpZ2h0c2VhZ3JlZW46IFwiMjBCMkFBXCIsXG4gICAgbGlnaHRza3libHVlOiBcIjg3Q0VGQVwiLFxuICAgIGxpZ2h0c2xhdGVncmF5OiBcIjc3ODg5OVwiLFxuICAgIGxpZ2h0c2xhdGVncmV5OiBcIjc3ODg5OVwiLFxuICAgIGxpZ2h0c3RlZWxibHVlOiBcIkIwQzRERVwiLFxuICAgIGxpZ2h0eWVsbG93OiBcIkZGRkZFMFwiLFxuICAgIGxpbWU6IFwiMDBGRjAwXCIsXG4gICAgbGltZWdyZWVuOiBcIjMyQ0QzMlwiLFxuICAgIGxpbmVuOiBcIkZBRjBFNlwiLFxuICAgIG1hZ2VudGE6IFwiRkYwMEZGXCIsXG4gICAgbWFyb29uOiBcIjgwMDAwMFwiLFxuICAgIG1lZGl1bWFxdWFtYXJpbmU6IFwiNjZDREFBXCIsXG4gICAgbWVkaXVtYmx1ZTogXCIwMDAwQ0RcIixcbiAgICBtZWRpdW1vcmNoaWQ6IFwiQkE1NUQzXCIsXG4gICAgbWVkaXVtcHVycGxlOiBcIjkzNzBEQlwiLFxuICAgIG1lZGl1bXNlYWdyZWVuOiBcIjNDQjM3MVwiLFxuICAgIG1lZGl1bXNsYXRlYmx1ZTogXCI3QjY4RUVcIixcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogXCIwMEZBOUFcIixcbiAgICBtZWRpdW10dXJxdW9pc2U6IFwiNDhEMUNDXCIsXG4gICAgbWVkaXVtdmlvbGV0cmVkOiBcIkM3MTU4NVwiLFxuICAgIG1pZG5pZ2h0Ymx1ZTogXCIxOTE5NzBcIixcbiAgICBtaW50Y3JlYW06IFwiRjVGRkZBXCIsXG4gICAgbWlzdHlyb3NlOiBcIkZGRTRFMVwiLFxuICAgIG1vY2Nhc2luOiBcIkZGRTRCNVwiLFxuICAgIG5hdmFqb3doaXRlOiBcIkZGREVBRFwiLFxuICAgIG5hdnk6IFwiMDAwMDgwXCIsXG4gICAgb2xkbGFjZTogXCJGREY1RTZcIixcbiAgICBvbGl2ZTogXCI4MDgwMDBcIixcbiAgICBvbGl2ZWRyYWI6IFwiNkI4RTIzXCIsXG4gICAgb3JhbmdlOiBcIkZGQTUwMFwiLFxuICAgIG9yYW5nZXJlZDogXCJGRjQ1MDBcIixcbiAgICBvcmNoaWQ6IFwiREE3MEQ2XCIsXG4gICAgcGFsZWdvbGRlbnJvZDogXCJFRUU4QUFcIixcbiAgICBwYWxlZ3JlZW46IFwiOThGQjk4XCIsXG4gICAgcGFsZXR1cnF1b2lzZTogXCJBRkVFRUVcIixcbiAgICBwYWxldmlvbGV0cmVkOiBcIkRCNzA5M1wiLFxuICAgIHBhcGF5YXdoaXA6IFwiRkZFRkQ1XCIsXG4gICAgcGVhY2hwdWZmOiBcIkZGREFCOVwiLFxuICAgIHBlcnU6IFwiQ0Q4NTNGXCIsXG4gICAgcGluazogXCJGRkMwQ0JcIixcbiAgICBwbHVtOiBcIkREQTBERFwiLFxuICAgIHBvd2RlcmJsdWU6IFwiQjBFMEU2XCIsXG4gICAgcHVycGxlOiBcIjgwMDA4MFwiLFxuICAgIHJlZDogXCJGRjAwMDBcIixcbiAgICByb3N5YnJvd246IFwiQkM4RjhGXCIsXG4gICAgcm95YWxibHVlOiBcIjQxNjlFMVwiLFxuICAgIHNhZGRsZWJyb3duOiBcIjhCNDUxM1wiLFxuICAgIHNhbG1vbjogXCJGQTgwNzJcIixcbiAgICBzYW5keWJyb3duOiBcIkY0QTQ2MFwiLFxuICAgIHNlYWdyZWVuOiBcIjJFOEI1N1wiLFxuICAgIHNlYXNoZWxsOiBcIkZGRjVFRVwiLFxuICAgIHNpZW5uYTogXCJBMDUyMkRcIixcbiAgICBzaWx2ZXI6IFwiQzBDMEMwXCIsXG4gICAgc2t5Ymx1ZTogXCI4N0NFRUJcIixcbiAgICBzbGF0ZWJsdWU6IFwiNkE1QUNEXCIsXG4gICAgc2xhdGVncmF5OiBcIjcwODA5MFwiLFxuICAgIHNsYXRlZ3JleTogXCI3MDgwOTBcIixcbiAgICBzbm93OiBcIkZGRkFGQVwiLFxuICAgIHNwcmluZ2dyZWVuOiBcIjAwRkY3RlwiLFxuICAgIHN0ZWVsYmx1ZTogXCI0NjgyQjRcIixcbiAgICB0YW46IFwiRDJCNDhDXCIsXG4gICAgdGVhbDogXCIwMDgwODBcIixcbiAgICB0aGlzdGxlOiBcIkQ4QkZEOFwiLFxuICAgIHRvbWF0bzogXCJGRjYzNDdcIixcbiAgICB0dXJxdW9pc2U6IFwiNDBFMEQwXCIsXG4gICAgdmlvbGV0OiBcIkVFODJFRVwiLFxuICAgIHdoZWF0OiBcIkY1REVCM1wiLFxuICAgIHdoaXRlOiBcIkZGRkZGRlwiLFxuICAgIHdoaXRlc21va2U6IFwiRjVGNUY1XCIsXG4gICAgeWVsbG93OiBcIkZGRkYwMFwiLFxuICAgIHllbGxvd2dyZWVuOiBcIjlBQ0QzMlwiXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJhaW5ib3dcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL1JhaW5ib3dWaXMuanMiXSwic291cmNlUm9vdCI6IiJ9