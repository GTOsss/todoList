var main =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = exports.Task = function () {
    function Task(arrayCards, id) {
        _classCallCheck(this, Task);

        this.cards = arrayCards;
        this.id = id;
    }

    _createClass(Task, [{
        key: 'toString',
        value: function toString() {
            return id + ', ' + cards.toString();
        }
    }]);

    return Task;
}();

var Card = exports.Card = function () {
    function Card(title, body, id) {
        _classCallCheck(this, Card);

        this.title = title;
        this.body = body;
        this.id = id;
    }

    _createClass(Card, [{
        key: 'toString',
        value: function toString() {
            return '(' + this.title + ', ' + this.body + ')';
        }
    }]);

    return Card;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Classes = __webpack_require__(0);

var tasks = [];
var table, abstractTask, abstractCard;

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    table = document.getElementById('table');
    abstractTask = document.getElementById('task').cloneNode(true);
    document.getElementById('task').remove();
    abstractCard = document.getElementById('task-card').cloneNode(true);
    document.getElementById('task-card').remove();
    StartLoad(GetLocalStorage('tasks'));
    document.getElementById('button-add-task').addEventListener('click', ClickAddTask);
    document.getElementById('button-save-task').addEventListener('click', ClickSave);
    document.getElementById('button-get-Lstorage').addEventListener('click', ClickGetStorage);
    document.getElementById('button-clear-Lstorage').addEventListener('click', ClickClearStorage);
}

function ClickAddTask() {
    var buf = abstractTask.cloneNode(true);
    buf.removeAttribute('style');
    GetChildElements('button-add-card', buf.childNodes[1])[0].addEventListener('click', ClickAddCard);
    GetChildElements('button-close-task', buf.childNodes[1])[0].addEventListener('click', ClickCloseTask);
    table.appendChild(buf);
    table.appendChild(this.parentNode);
}

function ClickAddCard() {
    var buf = abstractCard.cloneNode(true);
    buf.removeAttribute('style');
    event.currentTarget.parentNode.parentNode.appendChild(buf);
    event.currentTarget.parentNode.parentNode.appendChild(this.parentNode);
    GetChildElements('button-close-card', buf.childNodes[5])[0].addEventListener('click', ClickCloseCard);
}

function ClickCloseTask() {
    this.parentNode.parentNode.remove();
}

function ClickCloseCard() {
    this.parentNode.parentNode.remove();
}

function ClickSave() {
    tasks = [];
    GetChildElements('task', table).forEach(function (element) {
        var bufCurds = [];
        GetChildElements('task-card', element).forEach(function (element) {
            bufCurds.push(new _Classes.Card(element.childNodes[1].value, element.childNodes[3].value, 0));
        });
        tasks.push(new _Classes.Task(bufCurds, 0));
    });
    SetLocalStorage('tasks', tasks);
}

function SetLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
    console.log('set localStorage: ', tasks);
}

function GetLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function ClickGetStorage() {
    console.log(GetLocalStorage('tasks'));
}

function ClickClearStorage() {
    localStorage.clear();
}

function GetChildElements(id, obj) {
    var returnBuf = [];
    Array.prototype.slice.call(obj.childNodes).forEach(function (element, index, array) {
        if (element.getAttribute != undefined && element.getAttribute('id') === id) {
            returnBuf.push(element);
        }
    });
    return returnBuf;
}

function StartLoad(tasks) {
    if (tasks == undefined) return;
    tasks.forEach(function (element) {
        var bufTask = abstractTask.cloneNode(true);
        bufTask.removeAttribute('style');
        GetChildElements('button-add-card', bufTask.childNodes[1])[0].addEventListener('click', ClickAddCard);
        GetChildElements('button-close-task', bufTask.childNodes[1])[0].addEventListener('click', ClickCloseTask);
        element.cards.forEach(function (el) {
            var bufCard = abstractCard.cloneNode(true);
            bufCard.removeAttribute('style');
            bufCard.childNodes[1].value = el.title;
            bufCard.childNodes[3].value = el.body;
            GetChildElements('button-close-card', bufCard.childNodes[5])[0].addEventListener('click', ClickCloseCard);
            bufTask.appendChild(bufCard);
            bufTask.appendChild(GetChildElements('layout-buttons', bufTask)[0]);
        });
        table.appendChild(bufTask);
        table.appendChild(GetChildElements('layout-buttons-table', table)[0]);
    });
}

/***/ })
/******/ ]);