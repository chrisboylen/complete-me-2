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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1RyaWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5vZGUiLCJ3b3JkIiwiY29tcGxldGVkV29yZCIsImNoaWxkcmVuIiwiVHJpZSIsImxlbmd0aCIsInJvb3ROb2RlIiwiY291bnQiLCJzdWdnZXN0ZWRXb3JkcyIsImN1cnJlbnROb2RlIiwibGV0dGVycyIsInRvTG93ZXJDYXNlIiwibGV0dGVyIiwic2hpZnQiLCJwcmV2Tm9kZSIsImtleSIsImZvckVhY2giLCJPYmplY3QiLCJrZXlzIiwicHJlZml4IiwiZmluZE5vZGVPZldvcmQiLCJzZWFyY2hXb3JkcyIsIm1hcCIsIm5vZGUiLCJwdXNoIiwiZGljdGlvbmFyeSIsImluc2VydCIsInVzZXJJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHQiLCJmcyIsInJlYWRGaWxlU3luYyIsInRvU3RyaW5nIiwidHJpbSIsInNwbGl0IiwidHJpZSIsInBvcHVsYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXRTdWdnZXN0aW9ucyIsIm5vZGVWYWx1ZSIsInN1Z2dlc3QiLCJwcmVwZW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVB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QSxJQUFJQyxPQUFPLElBQUloQyxjQUFKLEVBQVg7O0FBRUFnQyxLQUFLQyxRQUFMLENBQWNaLFVBQWQ7O0FBRUFHLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0NTLGdCQUFsQyxDQUFtRCxPQUFuRCxFQUE0RCxVQUFTQyxDQUFULEVBQVk7QUFDdEVBLElBQUVDLGNBQUY7QUFDQUMsVUFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQUM7QUFDRCxDQUpEOztBQU1BLElBQU1BLG9CQUFvQixTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJGLFVBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsTUFBSXpDLE9BQU8wQixVQUFVaUIsU0FBckI7QUFDQSxNQUFJcEMsaUJBQWlCNEIsS0FBS1MsT0FBTCxDQUFhNUMsSUFBYixDQUFyQjs7QUFFQTJCLFdBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNpQixPQUF2QyxpQ0FDZ0N0QyxjQURoQztBQUdELENBUkQsQyIsImZpbGUiOiJkaXN0L21haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3Iod29yZCA9IG51bGwsIGNvbXBsZXRlZFdvcmQgPSBudWxsKSB7XG4gICAgdGhpcy53b3JkID0gd29yZDtcbiAgICB0aGlzLmNvbXBsZXRlZFdvcmQgPSBjb21wbGV0ZWRXb3JkO1xuICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgfVxufSIsImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5yb290Tm9kZSA9IG5ldyBOb2RlKCk7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5zdWdnZXN0ZWRXb3JkcyA9IFtdO1xuICB9XG5cbiAgZmluZE5vZGVPZldvcmQod29yZCkge1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMucm9vdE5vZGU7XG4gICAgbGV0IGxldHRlcnMgPSBbLi4ud29yZC50b0xvd2VyQ2FzZSgpXTtcblxuICAgIHdoaWxlIChsZXR0ZXJzLmxlbmd0aCkge1xuICAgICAgbGV0IGxldHRlciA9IGxldHRlcnMuc2hpZnQoKTtcblxuICAgICAgaWYgKGN1cnJlbnROb2RlLmNoaWxkcmVuW2xldHRlcl0pIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5jaGlsZHJlbltsZXR0ZXJdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICB9XG5cbiAgaW5zZXJ0KHdvcmQpIHtcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLnJvb3ROb2RlO1xuICAgIGxldCBsZXR0ZXJzID0gWy4uLndvcmQudG9Mb3dlckNhc2UoKV07XG4gICAgXG4gICAgd2hpbGUgKGxldHRlcnMubGVuZ3RoKSB7XG4gICAgICBsZXQgbGV0dGVyID0gbGV0dGVycy5zaGlmdCgpO1xuXG4gICAgICBpZiAoIWN1cnJlbnROb2RlLmNoaWxkcmVuW2xldHRlcl0pIHtcbiAgICAgICAgY3VycmVudE5vZGUuY2hpbGRyZW5bbGV0dGVyXSA9IG5ldyBOb2RlKGxldHRlcik7XG4gICAgICB9XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmNoaWxkcmVuW2xldHRlcl07XG4gICAgfVxuXG4gICAgaWYgKCFjdXJyZW50Tm9kZS5jb21wbGV0ZWRXb3JkKSB7XG4gICAgICBjdXJyZW50Tm9kZS5jb21wbGV0ZWRXb3JkID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgdGhpcy5jb3VudCsrO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlbGV0ZSh3b3JkKSB7XG4gIC8vICAgbGV0IGN1cnJlbnROb2RlID0gdGhpcy5maW5kTm9kZU9mV29yZCh3b3JkKTtcblxuICAvLyAgIGlmIChjdXJyZW50Tm9kZSkge1xuICAvLyAgICAgY3VycmVudE5vZGUuY29tcGxldGVkV29yZCA9IG51bGw7XG4gIC8vICAgICB0aGlzLmNvdW50LS07XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgZGVsZXRlKHdvcmQpIHtcbiAgICBsZXQgY3VycmVudE5vZGUgPSB0aGlzLnJvb3ROb2RlO1xuICAgIGxldCBsZXR0ZXJzID0gWy4uLndvcmQudG9Mb3dlckNhc2UoKV07XG4gICAgbGV0IHByZXZOb2RlID0gdGhpcy5yb290Tm9kZTtcbiAgICBsZXQga2V5O1xuXG4gICAgbGV0dGVycy5mb3JFYWNoKGxldHRlciA9PiB7XG4gICAgICBwcmV2Tm9kZSA9IGN1cnJlbnROb2RlXG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLmNoaWxkcmVuW2xldHRlcl07XG4gICAgICBrZXkgPSBsZXR0ZXJcbiAgICB9KTtcblxuICAgIGlmIChjdXJyZW50Tm9kZS5jb21wbGV0ZWRXb3JkKSB7XG4gICAgICBjdXJyZW50Tm9kZS5jb21wbGV0ZWRXb3JkID0gbnVsbDtcbiAgICAgIHRoaXMuY291bnQtLTtcbiAgICB9XG5cbiAgICBpZiAoIU9iamVjdC5rZXlzKGN1cnJlbnROb2RlLmNoaWxkcmVuKS5sZW5ndGgpIHtcbiAgICAgIGRlbGV0ZSBwcmV2Tm9kZS5jaGlsZHJlbltrZXldO1xuICAgICAgLy8gZGVsZXRlIGN1cnJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHN1Z2dlc3QocHJlZml4KSB7XG4gICAgdGhpcy5zdWdnZXN0ZWRXb3JkcyA9IFtdO1xuICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuZmluZE5vZGVPZldvcmQocHJlZml4KTtcblxuICAgIGlmICghY3VycmVudE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoV29yZHMoY3VycmVudE5vZGUpO1xuICAgIHJldHVybiB0aGlzLnN1Z2dlc3RlZFdvcmRzLm1hcChub2RlID0+IG5vZGUuY29tcGxldGVkV29yZCk7XG4gIH1cblxuICBzZWFyY2hXb3Jkcyhub2RlKSB7XG4gICAgaWYgKG5vZGUuY29tcGxldGVkV29yZCkge1xuICAgICAgdGhpcy5zdWdnZXN0ZWRXb3Jkcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgICAgIFxuICAgIE9iamVjdC5rZXlzKG5vZGUuY2hpbGRyZW4pLmZvckVhY2gobGV0dGVyID0+IHtcbiAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGUuY2hpbGRyZW5bbGV0dGVyXTtcblxuICAgICAgdGhpcy5zZWFyY2hXb3JkcyhjdXJyZW50Tm9kZSk7XG4gICAgfSk7XG4gIH1cblxuICBjb3VudGVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgcG9wdWxhdGUoZGljdGlvbmFyeSkge1xuICAgIGRpY3Rpb25hcnkuZm9yRWFjaCh3b3JkID0+IHRoaXMuaW5zZXJ0KHdvcmQpKTtcbiAgfVxuICBcbn0iLCJpbXBvcnQgVHJpZSBmcm9tICcuL1RyaWUnO1xuLy8gY29uc3QgVHJpZSA9IHJlcXVpcmUoJy4vVHJpZS5qcycpXG4vLyBpbXBvcnQgeyBmcyB9IGZyb20gJ2ZzJztcblxuY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItaW5wdXQnKTtcbmNvbnN0IHRleHQgPSAnL3Vzci9zaGFyZS9kaWN0L3dvcmRzJztcbmNvbnN0IGRpY3Rpb25hcnkgPSBmcy5yZWFkRmlsZVN5bmModGV4dCkudG9TdHJpbmcoKS50cmltKCkuc3BsaXQoJ1xcbicpO1xubGV0IHRyaWUgPSBuZXcgVHJpZSgpO1xuXG50cmllLnBvcHVsYXRlKGRpY3Rpb25hcnkpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2coJ3RlcnJ5JylcbiAgc3VibWl0U3VnZ2VzdGlvbnMoKVxufSlcblxuY29uc3Qgc3VibWl0U3VnZ2VzdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdiaW5nbycpXG4gIGxldCB3b3JkID0gdXNlcklucHV0Lm5vZGVWYWx1ZTtcbiAgbGV0IHN1Z2dlc3RlZFdvcmRzID0gdHJpZS5zdWdnZXN0KHdvcmQpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LXN1ZycpLnByZXBlbmQoXG4gICAgYDx1bCBjbGFzcz1cInN1Z2dlc3RlZC1saXN0XCI+JHtzdWdnZXN0ZWRXb3Jkc308L3VsPmBcbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=