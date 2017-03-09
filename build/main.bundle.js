'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by root on 08.03.17.
 */
var tasks = [];
var table = document.getElementById('table');
var btnCloseTask = document.getElementById('button-close-task').cloneNode(true);
var abstractTask = document.getElementById('task');
var abstractCard = document.getElementById('task-card');

var Task = function () {
    function Task(title, body, id) {
        _classCallCheck(this, Task);

        this.title = title;
        this.body = body;
        this.id = id;
    }

    _createClass(Task, [{
        key: 'toString',
        value: function toString() {
            return '(' + this.title + ', ' + this.body + ')';
        }
    }]);

    return Task;
}();

function ClickAddTask(sender) {
    var buf = abstractTask.cloneNode(true);
    table.appendChild(buf);
    table.appendChild(sender);
    tasks.push(new Task('', '', tasks.length));
}

function ClickAddCard(sender) {
    var buf = abstractCard.cloneNode(true);
    sender.parentNode.appendChild(buf);
    sender.parentNode.appendChild(sender);
    sender.parentNode.appendChild(btnCloseTask);
}

function RemoveParent(sender) {
    console.log(sender.parentNode);
    sender.parentNode.remove();
}

console.log(tasks.length);

console.log('test');
localStorage.setItem("test", JSON.stringify({ "filed1": "1", "filed2": "два" }));
console.log(JSON.parse(localStorage.getItem("test")));
