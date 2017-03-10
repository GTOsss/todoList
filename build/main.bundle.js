'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tasks = [];
var table = document.getElementById('table');
var abstractTask = document.getElementById('task').cloneNode(true);
var abstractCard = document.getElementById('task-card').cloneNode(true);

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    // if (GetLocalStrorage('cards') != undefined)
    // cards = GetLocalStrorage('cards');
    // console.log('Loaded from localStorage: ', cards);
}

var Task = function () {
    function Task(arrayCards, id) {
        _classCallCheck(this, Task);

        this.cards = [];
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

var Card = function () {
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

function ClickAddTask(sender) {
    var buf = abstractTask.cloneNode(true);
    table.appendChild(buf);
    table.appendChild(sender);
    console.log(GetChildElements('task', table));
}

function ClickAddCard(sender) {
    var buf = abstractCard.cloneNode(true);
    sender.parentNode.parentNode.appendChild(buf);
    sender.parentNode.parentNode.appendChild(sender.parentNode);
    cards.push(new Card(sender.parentNode.parentNode.childNodes[1].value, sender.parentNode.parentNode.childNodes[3].value, cards.length));
}

function ClickCloseTask(sender) {
    sender.parentNode.parentNode.remove();
}

function ClickCloseCard(sender) {
    sender.parentNode.parentNode.remove();
    cards[sender.parentNode.parentNode.getAttribute('idNumber')] = null;
    SetLocalStrorage('cards', cards);
}

function ClickSaveCard(sender) {
    var id = sender.parentNode.parentNode.getAttribute('idNumber');
    cards[id].title = sender.parentNode.parentNode.childNodes[1].value;
    cards[id].body = sender.parentNode.parentNode.childNodes[3].value;
    SetLocalStrorage('cards', cards);
}

function SetLocalStrorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
    console.log('set localStorage: ', cards);
}

function GetLocalStrorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function ClickGetStorage(key) {
    console.log(GetLocalStrorage(key));
}

function ClickClearStorage(key) {
    localStorage.clear();
}

function GetChildElements(cssClass, obj) {
    var returnBuf = [];
    Array.prototype.slice.call(obj.childNodes).forEach(function (element, index, array) {
        if (element.getAttribute != undefined && element.getAttribute('class') === cssClass) {
            returnBuf.push(obj);
        }
    });
    return returnBuf;
}
