'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cards = [];
var table = document.getElementById('table');
var abstractTask = document.getElementById('task').cloneNode(true);
var abstractCard = document.getElementById('task-card').cloneNode(true);

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    if (GetLocalStrorage('cards') != undefined) cards = GetLocalStrorage('cards');
    console.log('Loaded from localStorage: ', cards);
}

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
}

function ClickAddCard(sender) {
    var buf = abstractCard.cloneNode(true);
    buf.setAttribute('idNumber', cards.length);
    buf.removeAttribute('style');
    sender.parentNode.parentNode.appendChild(buf);
    sender.parentNode.parentNode.appendChild(sender.parentNode);
    console.log(cards + ' test');
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

// console.log('test');
// localStorage.setItem("test", JSON.stringify({"filed1": "1", "filed2" : "два"}));
// console.log(JSON.parse(localStorage.getItem("test")));
