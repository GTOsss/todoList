'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
}

var Task = function () {
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
    buf.removeAttribute('style');
    table.appendChild(buf);
    table.appendChild(sender.parentNode);
}

function ClickAddCard(sender) {
    var buf = abstractCard.cloneNode(true);
    buf.removeAttribute('style');
    sender.parentNode.parentNode.appendChild(buf);
    sender.parentNode.parentNode.appendChild(sender.parentNode);
}

function ClickCloseTask(sender) {
    sender.parentNode.parentNode.remove();
}

function ClickCloseCard(sender) {
    sender.parentNode.parentNode.remove();
}

function ClickSave(sender) {
    tasks = [];
    GetChildElements('task', table).forEach(function (element) {
        var bufCurds = [];
        GetChildElements('task-card', element).forEach(function (element) {
            bufCurds.push(new Card(element.childNodes[1].value, element.childNodes[3].value, 0));
        });
        tasks.push(new Task(bufCurds, 0));
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

function ClickGetStorage(key) {
    console.log(GetLocalStorage(key));
}

function ClickClearStorage(key) {
    localStorage.clear();
}

function GetChildElements(cssClass, obj) {
    var returnBuf = [];
    Array.prototype.slice.call(obj.childNodes).forEach(function (element, index, array) {
        if (element.getAttribute != undefined && element.getAttribute('class') === cssClass) {
            returnBuf.push(element);
        }
    });
    return returnBuf;
}

function StartLoad(tasks) {
    tasks.forEach(function (element) {
        var bufTask = abstractTask.cloneNode(true);
        bufTask.removeAttribute('style');
        element.cards.forEach(function (el) {
            var bufCard = abstractCard.cloneNode(true);
            bufCard.removeAttribute('style');
            bufCard.childNodes[1].value = el.title;
            bufCard.childNodes[3].value = el.body;
            bufTask.appendChild(bufCard);
            bufTask.appendChild(GetChildElements('layout-buttons', bufTask)[0]);
        });
        table.appendChild(bufTask);
        table.appendChild(GetChildElements('layout-buttons-table', table)[0]);
    });
}
