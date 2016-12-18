/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\n// import text from './input/text/component';\r\n// import number from './input/number/component';\r\n// import numberSpinner from './input/number-spinner/component';\r\n// import percentage from './input/percentage/component';\r\nvar component_1 = __webpack_require__(1);\r\nvar app = angular.module('ui', []);\r\nconsole.log(\"initializing ui\");\r\napp.component(\"uiInputText\", new component_1.UiInputTextComponent());\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/ui/module.ts\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./source/ui/module.ts?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\nvar __extends = (this && this.__extends) || function (d, b) {\r\n    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n};\r\nvar component_1 = __webpack_require__(2);\r\n__webpack_require__(7);\r\nvar UiInputTextController = (function (_super) {\r\n    __extends(UiInputTextController, _super);\r\n    function UiInputTextController() {\r\n        return _super.apply(this, arguments) || this;\r\n    }\r\n    return UiInputTextController;\r\n}(component_1.UiInputCommonController));\r\nexports.UiInputTextController = UiInputTextController;\r\nvar UiInputTextComponent = (function (_super) {\r\n    __extends(UiInputTextComponent, _super);\r\n    function UiInputTextComponent() {\r\n        var _this = _super.apply(this, arguments) || this;\r\n        _this.controller = UiInputTextController;\r\n        _this.template = __webpack_require__(9);\r\n        return _this;\r\n    }\r\n    return UiInputTextComponent;\r\n}(component_1.UiInputCommonComponent));\r\nexports.UiInputTextComponent = UiInputTextComponent;\r\n// export default (module: ng.IModule) => {\r\n//     module.component('uiInputText', new Component());\r\n// };\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/ui/input/text/component.ts\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./source/ui/input/text/component.ts?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\r\n__webpack_require__(3);\r\nvar UiInputCommonController = (function () {\r\n    function UiInputCommonController($element) {\r\n        this.$element = $element;\r\n    }\r\n    UiInputCommonController.prototype.$onInit = function () {\r\n        var _this = this;\r\n        //  Add a common class for styling\r\n        this.$element.addClass(\"ui-input\");\r\n        //  Add and remove the focussed class when this control has the focus\r\n        this.$element.on('focus', '*', function () { return _this.focus(false); });\r\n        this.$element.on('blur', '*', function () { return _this.unfocus(false); });\r\n        var $input = $(this.$element.find('input'));\r\n        // $input.on(\"change keyup\", (event: JQueryEventObject) => {\r\n        //     this.ngModel.$setViewValue($input.val());\r\n        // })\r\n        // this.ngModel.$render = () => {\r\n        //     $input.val(this.ngModel.$viewValue);\r\n        // };\r\n    };\r\n    UiInputCommonController.prototype.focus = function (force) {\r\n        this.$element.addClass(\"focussed\");\r\n    };\r\n    UiInputCommonController.prototype.unfocus = function (force) {\r\n        this.$element.removeClass(\"focussed\");\r\n    };\r\n    return UiInputCommonController;\r\n}());\r\nUiInputCommonController.$inject = ['$element'];\r\nexports.UiInputCommonController = UiInputCommonController;\r\nvar UiInputCommonComponent = (function () {\r\n    function UiInputCommonComponent() {\r\n        this.bindings = {\r\n            options: '='\r\n        };\r\n        this.require = {\r\n            ngModel: 'ngModel'\r\n        };\r\n    }\r\n    return UiInputCommonComponent;\r\n}());\r\nexports.UiInputCommonComponent = UiInputCommonComponent;\r\n// class Component implements ng.IComponentOptions {\r\n//     controller = Controller;\r\n//     template = require('./template.html');\r\n//     bindings: { [slot: string]: string } = {\r\n//         options: '='\r\n//     };\r\n// }\r\n// export default (module: ng.IModule) => {\r\n//     module.component('uiInputNumber', new Component());\r\n// };\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/ui/input/common/component.ts\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./source/ui/input/common/component.ts?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/ui/input/common/style.scss\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///./source/ui/input/common/style.scss?");

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
3,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	eval("module.exports = \"<div>\\r\\n    <input placeholder=\\\"{{ $ctrl.options.placeholder }}\\\" type=\\\" text \\\" />\\r\\n</div>\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./source/ui/input/text/template.html\n// module id = 9\n// module chunks = 0\n//# sourceURL=webpack:///./source/ui/input/text/template.html?");

/***/ }
/******/ ])));