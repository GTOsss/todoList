import {Card, Task} from './Classes'

let tasks = [];
var table, abstractTask, abstractCard;

document.addEventListener("DOMContentLoaded", ready);

function ready(){
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
    let buf = abstractTask.cloneNode(true);
    buf.removeAttribute('style');
    GetChildElements('button-add-card', buf.childNodes[1])[0].addEventListener('click', ClickAddCard);
    GetChildElements('button-close-task', buf.childNodes[1])[0].addEventListener('click', ClickCloseTask);
    table.appendChild(buf);
    table.appendChild(this.parentNode);
}

function ClickAddCard() {
    let buf = abstractCard.cloneNode(true);
    buf.removeAttribute('style')
    event.currentTarget.parentNode.parentNode.appendChild(buf);
    event.currentTarget.parentNode.parentNode.appendChild(this.parentNode);
    GetChildElements('button-close-task', buf.childNodes[5])[0].addEventListener('click', ClickCloseCard);
}

function ClickCloseTask() {
    this.parentNode.parentNode.remove();
}

function ClickCloseCard() {
    this.parentNode.parentNode.remove();
}

function ClickSave() {
    tasks = [];
    GetChildElements('task', table).forEach(function(element){
        var bufCurds = [];
        GetChildElements('task-card', element).forEach(function(element){
            bufCurds.push(new Card(element.childNodes[1].value,
                element.childNodes[3].value, 0));
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

function ClickGetStorage() {
    console.log(GetLocalStorage('tasks'));
}

function ClickClearStorage() {
    localStorage.clear();
}

function GetChildElements(cssClass, obj) {
    let returnBuf = [];
    Array.prototype.slice.call(obj.childNodes).forEach(function(element, index, array) {
        if(element.getAttribute != undefined && element.getAttribute('class') === cssClass) {
            returnBuf.push(element);
        }
    });
    return returnBuf;
}

function StartLoad(tasks) {
    if(tasks == undefined) return;
    tasks.forEach(function(element){
        let bufTask = abstractTask.cloneNode(true);
        bufTask.removeAttribute('style');
        GetChildElements('button-add-card', bufTask.childNodes[1])[0].addEventListener('click', ClickAddCard);
        GetChildElements('button-close-task', bufTask.childNodes[1])[0].addEventListener('click', ClickCloseTask);
        element.cards.forEach(function(el){
            let bufCard = abstractCard.cloneNode(true);
            bufCard.removeAttribute('style');
            bufCard.childNodes[1].value = el.title;
            bufCard.childNodes[3].value = el.body;
            GetChildElements('button-close-task', bufCard.childNodes[5])[0].addEventListener('click', ClickCloseCard);
            bufTask.appendChild(bufCard);
            bufTask.appendChild(GetChildElements('layout-buttons', bufTask)[0]);
        });
        table.appendChild(bufTask);
        table.appendChild(GetChildElements('layout-buttons-table', table)[0]);
    });
}

