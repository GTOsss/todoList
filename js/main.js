/**
 * Created by root on 08.03.17.
 */
let tasks = [];
let table = document.getElementById('table');
let btnCloseTask = document.getElementById('button-close-task').cloneNode(true);
let abstractTask = document.getElementById('task');
let abstractCard = document.getElementById('task-card');

class Task  {

    constructor(title, body, id) {
        this.title = title;
        this.body = body;
        this.id = id;
    }

    toString() {
        return '(' + this.title + ', ' + this.body + ')';
    }

}

function ClickAddTask(sender) {
    let buf = abstractTask.cloneNode(true);
    table.appendChild(buf);
    table.appendChild(sender);
    tasks.push(new Task('','', tasks.length));
}

function ClickAddCard(sender) {
    let buf = abstractCard.cloneNode(true);
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
localStorage.setItem("test", JSON.stringify({"filed1": "1", "filed2" : "два"}));
console.log(JSON.parse(localStorage.getItem("test")));
