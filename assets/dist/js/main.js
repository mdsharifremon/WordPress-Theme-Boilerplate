/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/script.js":
/*!*************************************!*\
  !*** ./src/js/components/script.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


var helloName = function helloName(name) {
  return console.log(name);
};

jquery__WEBPACK_IMPORTED_MODULE_0___default()(".article__title").css("color", "red");
helloName("John");

/***/ }),

/***/ "./src/images/1.png":
/*!**************************!*\
  !*** ./src/images/1.png ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../images/1.png");

/***/ }),

/***/ "./src/images/2.png":
/*!**************************!*\
  !*** ./src/images/2.png ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../images/2.png");

/***/ }),

/***/ "./src/images/3.jpg":
/*!**************************!*\
  !*** ./src/images/3.jpg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../images/3.jpg");

/***/ }),

/***/ "./src/images/4.gif":
/*!**************************!*\
  !*** ./src/images/4.gif ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../images/4.gif");

/***/ }),

/***/ "./src/images/5.gif":
/*!**************************!*\
  !*** ./src/images/5.gif ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../images/5.gif");

/***/ }),

/***/ "./src/images/6.gif":
/*!**************************!*\
  !*** ./src/images/6.gif ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../images/6.gif");

/***/ }),

/***/ "./src/images/7.svg":
/*!**************************!*\
  !*** ./src/images/7.svg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../images/7.svg");

/***/ }),

/***/ "./src/scss/theme.scss":
/*!*****************************!*\
  !*** ./src/scss/theme.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_theme_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/theme.scss */ "./src/scss/theme.scss");
/* harmony import */ var _images_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/1.png */ "./src/images/1.png");
/* harmony import */ var _images_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/2.png */ "./src/images/2.png");
/* harmony import */ var _images_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/3.jpg */ "./src/images/3.jpg");
/* harmony import */ var _images_4_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/4.gif */ "./src/images/4.gif");
/* harmony import */ var _images_5_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/5.gif */ "./src/images/5.gif");
/* harmony import */ var _images_6_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/6.gif */ "./src/images/6.gif");
/* harmony import */ var _images_7_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/7.svg */ "./src/images/7.svg");
/* harmony import */ var _components_script_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/script.js */ "./src/js/components/script.js");
// Css
 // Images







 // Js


}();
/******/ })()
;
//# sourceMappingURL=main.js.map