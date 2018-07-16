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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Node.js":
/*!*********************!*\
  !*** ./lib/Node.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node() {
  var word = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var completedWord = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _classCallCheck(this, Node);

  this.word = word;
  this.completedWord = completedWord;
  this.children = {};
};

exports.default = Node;

/***/ }),

/***/ "./lib/Trie.js":
/*!*********************!*\
  !*** ./lib/Trie.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node = __webpack_require__(/*! ./Node */ "./lib/Node.js");

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Trie = function () {
  function Trie() {
    _classCallCheck(this, Trie);

    this.length = 0;
    this.rootNode = new _Node2.default();
    this.count = 0;
    this.suggestedWords = [];
  }

  _createClass(Trie, [{
    key: 'findNodeOfWord',
    value: function findNodeOfWord(word) {
      var currentNode = this.rootNode;
      var letters = [].concat(_toConsumableArray(word.toLowerCase()));

      while (letters.length) {
        var letter = letters.shift();

        if (currentNode.children[letter]) {
          currentNode = currentNode.children[letter];
        } else {
          return null;
        }
      }

      return currentNode;
    }
  }, {
    key: 'insert',
    value: function insert(word) {
      var currentNode = this.rootNode;
      var letters = [].concat(_toConsumableArray(word.toLowerCase()));

      while (letters.length) {
        var letter = letters.shift();

        if (!currentNode.children[letter]) {
          currentNode.children[letter] = new _Node2.default(letter);
        }
        currentNode = currentNode.children[letter];
      }

      if (!currentNode.completedWord) {
        currentNode.completedWord = word.toLowerCase();
        this.count++;
      }
    }

    // delete(word) {
    //   let currentNode = this.findNodeOfWord(word);

    //   if (currentNode) {
    //     currentNode.completedWord = null;
    //     this.count--;
    //   }
    // }

  }, {
    key: 'delete',
    value: function _delete(word) {
      var currentNode = this.rootNode;
      var letters = [].concat(_toConsumableArray(word.toLowerCase()));
      var prevNode = this.rootNode;
      var key = void 0;

      letters.forEach(function (letter) {
        prevNode = currentNode;
        currentNode = currentNode.children[letter];
        key = letter;
      });

      if (currentNode.completedWord) {
        currentNode.completedWord = null;
        this.count--;
      }

      if (!Object.keys(currentNode.children).length) {
        delete prevNode.children[key];
        // delete currentNode;
      }
    }
  }, {
    key: 'suggest',
    value: function suggest(prefix) {
      this.suggestedWords = [];
      var currentNode = this.findNodeOfWord(prefix);

      if (!currentNode) {
        return null;
      }

      this.searchWords(currentNode);
      return this.suggestedWords.map(function (node) {
        return node.completedWord;
      });
    }
  }, {
    key: 'searchWords',
    value: function searchWords(node) {
      var _this = this;

      if (node.completedWord) {
        this.suggestedWords.push(node);
      }

      Object.keys(node.children).forEach(function (letter) {
        var currentNode = node.children[letter];

        _this.searchWords(currentNode);
      });
    }
  }, {
    key: 'counter',
    value: function counter() {
      return this.count;
    }
  }, {
    key: 'populate',
    value: function populate(dictionary) {
      var _this2 = this;

      dictionary.forEach(function (word) {
        return _this2.insert(word);
      });
    }
  }]);

  return Trie;
}();

exports.default = Trie;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Trie = __webpack_require__(/*! ./Trie */ "./lib/Trie.js");

var _Trie2 = _interopRequireDefault(_Trie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const Trie = require('./Trie.js')
// import { fs } from 'fs';

var userInput = document.querySelector('.user-input');
var text = '/usr/share/dict/words';
var dictionary = fs.readFileSync(text).toString().trim().split('\n');
var trie = new _Trie2.default();

trie.populate(dictionary);

document.querySelector('.submit').addEventListener('click', function (e) {
  e.preventDefault();
  console.log('terry');
  submitSuggestions();
});

var submitSuggestions = function submitSuggestions() {
  console.log('bingo');
  var word = userInput.nodeValue;
  var suggestedWords = trie.suggest(word);

  document.querySelector('.display-sug').prepend('<ul class="suggested-list">' + suggestedWords + '</ul>');
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RyaWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5vZGUiLCJ3b3JkIiwiY29tcGxldGVkV29yZCIsImNoaWxkcmVuIiwiVHJpZSIsImxlbmd0aCIsInJvb3ROb2RlIiwiY291bnQiLCJzdWdnZXN0ZWRXb3JkcyIsImN1cnJlbnROb2RlIiwibGV0dGVycyIsInRvTG93ZXJDYXNlIiwibGV0dGVyIiwic2hpZnQiLCJwcmV2Tm9kZSIsImtleSIsImZvckVhY2giLCJPYmplY3QiLCJrZXlzIiwicHJlZml4IiwiZmluZE5vZGVPZldvcmQiLCJzZWFyY2hXb3JkcyIsIm1hcCIsIm5vZGUiLCJwdXNoIiwiZGljdGlvbmFyeSIsImluc2VydCIsInVzZXJJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHQiLCJmcyIsInJlYWRGaWxlU3luYyIsInRvU3RyaW5nIiwidHJpbSIsInNwbGl0IiwidHJpZSIsInBvcHVsYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXRTdWdnZXN0aW9ucyIsIm5vZGVWYWx1ZSIsInN1Z2dlc3QiLCJwcmVwZW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVB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QSxJQUFJQyxPQUFPLElBQUloQyxjQUFKLEVBQVg7O0FBRUFnQyxLQUFLQyxRQUFMLENBQWNaLFVBQWQ7O0FBRUFHLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0NTLGdCQUFsQyxDQUFtRCxPQUFuRCxFQUE0RCxVQUFTQyxDQUFULEVBQVk7QUFDdEVBLElBQUVDLGNBQUY7QUFDQUMsVUFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQUM7QUFDRCxDQUpEOztBQU1BLElBQU1BLG9CQUFvQixTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJGLFVBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsTUFBSXpDLE9BQU8wQixVQUFVaUIsU0FBckI7QUFDQSxNQUFJcEMsaUJBQWlCNEIsS0FBS1MsT0FBTCxDQUFhNUMsSUFBYixDQUFyQjs7QUFFQTJCLFdBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNpQixPQUF2QyxpQ0FDZ0N0QyxjQURoQztBQUdELENBUkQsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHdvcmQgPSBudWxsLCBjb21wbGV0ZWRXb3JkID0gbnVsbCkge1xuICAgIHRoaXMud29yZCA9IHdvcmQ7XG4gICAgdGhpcy5jb21wbGV0ZWRXb3JkID0gY29tcGxldGVkV29yZDtcbiAgICB0aGlzLmNoaWxkcmVuID0ge307XG4gIH1cbn0iLCJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmllIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIHRoaXMucm9vdE5vZGUgPSBuZXcgTm9kZSgpO1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMuc3VnZ2VzdGVkV29yZHMgPSBbXTtcbiAgfVxuXG4gIGZpbmROb2RlT2ZXb3JkKHdvcmQpIHtcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLnJvb3ROb2RlO1xuICAgIGxldCBsZXR0ZXJzID0gWy4uLndvcmQudG9Mb3dlckNhc2UoKV07XG5cbiAgICB3aGlsZSAobGV0dGVycy5sZW5ndGgpIHtcbiAgICAgIGxldCBsZXR0ZXIgPSBsZXR0ZXJzLnNoaWZ0KCk7XG5cbiAgICAgIGlmIChjdXJyZW50Tm9kZS5jaGlsZHJlbltsZXR0ZXJdKSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuY2hpbGRyZW5bbGV0dGVyXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgfVxuXG4gIGluc2VydCh3b3JkKSB7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5yb290Tm9kZTtcbiAgICBsZXQgbGV0dGVycyA9IFsuLi53b3JkLnRvTG93ZXJDYXNlKCldO1xuICAgIFxuICAgIHdoaWxlIChsZXR0ZXJzLmxlbmd0aCkge1xuICAgICAgbGV0IGxldHRlciA9IGxldHRlcnMuc2hpZnQoKTtcblxuICAgICAgaWYgKCFjdXJyZW50Tm9kZS5jaGlsZHJlbltsZXR0ZXJdKSB7XG4gICAgICAgIGN1cnJlbnROb2RlLmNoaWxkcmVuW2xldHRlcl0gPSBuZXcgTm9kZShsZXR0ZXIpO1xuICAgICAgfVxuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5jaGlsZHJlbltsZXR0ZXJdO1xuICAgIH1cblxuICAgIGlmICghY3VycmVudE5vZGUuY29tcGxldGVkV29yZCkge1xuICAgICAgY3VycmVudE5vZGUuY29tcGxldGVkV29yZCA9IHdvcmQudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMuY291bnQrKztcbiAgICB9XG4gIH1cblxuICAvLyBkZWxldGUod29yZCkge1xuICAvLyAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuZmluZE5vZGVPZldvcmQod29yZCk7XG5cbiAgLy8gICBpZiAoY3VycmVudE5vZGUpIHtcbiAgLy8gICAgIGN1cnJlbnROb2RlLmNvbXBsZXRlZFdvcmQgPSBudWxsO1xuICAvLyAgICAgdGhpcy5jb3VudC0tO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGRlbGV0ZSh3b3JkKSB7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5yb290Tm9kZTtcbiAgICBsZXQgbGV0dGVycyA9IFsuLi53b3JkLnRvTG93ZXJDYXNlKCldO1xuICAgIGxldCBwcmV2Tm9kZSA9IHRoaXMucm9vdE5vZGU7XG4gICAgbGV0IGtleTtcblxuICAgIGxldHRlcnMuZm9yRWFjaChsZXR0ZXIgPT4ge1xuICAgICAgcHJldk5vZGUgPSBjdXJyZW50Tm9kZVxuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5jaGlsZHJlbltsZXR0ZXJdO1xuICAgICAga2V5ID0gbGV0dGVyXG4gICAgfSk7XG5cbiAgICBpZiAoY3VycmVudE5vZGUuY29tcGxldGVkV29yZCkge1xuICAgICAgY3VycmVudE5vZGUuY29tcGxldGVkV29yZCA9IG51bGw7XG4gICAgICB0aGlzLmNvdW50LS07XG4gICAgfVxuXG4gICAgaWYgKCFPYmplY3Qua2V5cyhjdXJyZW50Tm9kZS5jaGlsZHJlbikubGVuZ3RoKSB7XG4gICAgICBkZWxldGUgcHJldk5vZGUuY2hpbGRyZW5ba2V5XTtcbiAgICAgIC8vIGRlbGV0ZSBjdXJyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICBzdWdnZXN0KHByZWZpeCkge1xuICAgIHRoaXMuc3VnZ2VzdGVkV29yZHMgPSBbXTtcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLmZpbmROb2RlT2ZXb3JkKHByZWZpeCk7XG5cbiAgICBpZiAoIWN1cnJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnNlYXJjaFdvcmRzKGN1cnJlbnROb2RlKTtcbiAgICByZXR1cm4gdGhpcy5zdWdnZXN0ZWRXb3Jkcy5tYXAobm9kZSA9PiBub2RlLmNvbXBsZXRlZFdvcmQpO1xuICB9XG5cbiAgc2VhcmNoV29yZHMobm9kZSkge1xuICAgIGlmIChub2RlLmNvbXBsZXRlZFdvcmQpIHtcbiAgICAgIHRoaXMuc3VnZ2VzdGVkV29yZHMucHVzaChub2RlKTtcbiAgICB9XG4gICAgICBcbiAgICBPYmplY3Qua2V5cyhub2RlLmNoaWxkcmVuKS5mb3JFYWNoKGxldHRlciA9PiB7XG4gICAgICBsZXQgY3VycmVudE5vZGUgPSBub2RlLmNoaWxkcmVuW2xldHRlcl07XG5cbiAgICAgIHRoaXMuc2VhcmNoV29yZHMoY3VycmVudE5vZGUpO1xuICAgIH0pO1xuICB9XG5cbiAgY291bnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIHBvcHVsYXRlKGRpY3Rpb25hcnkpIHtcbiAgICBkaWN0aW9uYXJ5LmZvckVhY2god29yZCA9PiB0aGlzLmluc2VydCh3b3JkKSk7XG4gIH1cbiAgXG59IiwiaW1wb3J0IFRyaWUgZnJvbSAnLi9UcmllJztcbi8vIGNvbnN0IFRyaWUgPSByZXF1aXJlKCcuL1RyaWUuanMnKVxuLy8gaW1wb3J0IHsgZnMgfSBmcm9tICdmcyc7XG5cbmNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWlucHV0Jyk7XG5jb25zdCB0ZXh0ID0gJy91c3Ivc2hhcmUvZGljdC93b3Jkcyc7XG5jb25zdCBkaWN0aW9uYXJ5ID0gZnMucmVhZEZpbGVTeW5jKHRleHQpLnRvU3RyaW5nKCkudHJpbSgpLnNwbGl0KCdcXG4nKTtcbmxldCB0cmllID0gbmV3IFRyaWUoKTtcblxudHJpZS5wb3B1bGF0ZShkaWN0aW9uYXJ5KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnNvbGUubG9nKCd0ZXJyeScpXG4gIHN1Ym1pdFN1Z2dlc3Rpb25zKClcbn0pXG5cbmNvbnN0IHN1Ym1pdFN1Z2dlc3Rpb25zID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnYmluZ28nKVxuICBsZXQgd29yZCA9IHVzZXJJbnB1dC5ub2RlVmFsdWU7XG4gIGxldCBzdWdnZXN0ZWRXb3JkcyA9IHRyaWUuc3VnZ2VzdCh3b3JkKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1zdWcnKS5wcmVwZW5kKFxuICAgIGA8dWwgY2xhc3M9XCJzdWdnZXN0ZWQtbGlzdFwiPiR7c3VnZ2VzdGVkV29yZHN9PC91bD5gXG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9