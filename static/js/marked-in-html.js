/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function (value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
  /******/
});
      /******/
}
    /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
    /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
  /******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

    "use strict";


    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MarkedInHtml = undefined;

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    var _marked = __webpack_require__(3);

    var _marked2 = _interopRequireDefault(_marked);

    var _highlight2 = __webpack_require__(2);

    var _highlight3 = _interopRequireDefault(_highlight2);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var MarkedInHtml = exports.MarkedInHtml = function () {
      function MarkedInHtml() {
        _classCallCheck(this, MarkedInHtml);

        _marked2.default.setOptions(this.options || {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          highlight: function highlight(code, lang, callback) {
            return _highlight3.default.highlightAuto(code).value;
          }
        });
      }

      _createClass(MarkedInHtml, [{
        key: 'init',
        value: function init() {
          var _this = this;

          document.querySelectorAll('template[type="markdown"]').forEach(function ($template) {
            var $container = document.createElement('div');
            $container.innerHTML = _this.parse($template);
            $container.id = $template.id;
            $container.classList.add(['markdown-body'].concat(_toConsumableArray(Array.from($template.classList))));
            $container.dataset.markdown = _this.intelligentProcessingIndent($template);
            $template.parentElement.replaceChild($container, $template);
          });
        }
      }, {
        key: 'parse',
        value: function parse($template) {
          return (0, _marked2.default)(this.intelligentProcessingIndent($template));
        }
      }, {
        key: 'intelligentProcessingIndent',
        value: function intelligentProcessingIndent($template) {
          var lines = $template.innerHTML.split('\n');
          lines.length && /^\s*$/.test(lines[0]) && lines.shift();
          lines.length && /^\s*$/.test(lines[lines.length - 1]) && lines.pop();
          var minSpaceSize = Math.min.apply(Math, _toConsumableArray(lines.map(function (line) {
            return line.length ? line.match(/^\s*/)[0].length : Infinity;
          })));
          return lines.map(function (line) {
            return line.substring(minSpaceSize);
          }).join('\n');
        }
      }]);

      return MarkedInHtml;
    }();

    /***/
}),
  /* 1 */
  /***/ (function (module, exports, __webpack_require__) {

    "use strict";


    var _markedInHtml = __webpack_require__(0);

    window && (window.markedInHtml = new _markedInHtml.MarkedInHtml());

    /***/
}),
  /* 2 */
  /***/ (function (module, exports) {

    module.exports = hljs;

    /***/
}),
  /* 3 */
  /***/ (function (module, exports) {

    module.exports = marked;

    /***/
})
  /******/]);