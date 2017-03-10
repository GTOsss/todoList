let tasks = [];
let table = document.getElementById('table');
let abstractTask = document.getElementById('task').cloneNode(true);
let abstractCard = document.getElementById('task-card').cloneNode(true);

document.addEventListener("DOMContentLoaded", ready);

function ready(){
    // if (GetLocalStrorage('cards') != undefined)
        // cards = GetLocalStrorage('cards');
    // console.log('Loaded from localStorage: ', cards);
}

class Task {
    constructor(arrayCards, id) {
        this.cards = [];
        this.id = id;
    }

    toString() {
        return id + ', ' + cards.toString();
    }
}

class Card  {
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
    console.log(GetChildElements('task', table));
}

function ClickAddCard(sender) {
    let buf = abstractCard.cloneNode(true);
    sender.parentNode.parentNode.appendChild(buf);
    sender.parentNode.parentNode.appendChild(sender.parentNode);
    cards.push(new Card(sender.parentNode.parentNode.childNodes[1].value,
                        sender.parentNode.parentNode.childNodes[3].value,
                        cards.length));
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
    let id = sender.parentNode.parentNode.getAttribute('idNumber');
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
    let returnBuf = [];
    Array.prototype.slice.call(obj.childNodes).forEach(function(element, index, array) {
        if(element.getAttribute != undefined && element.getAttribute('class') === cssClass) {
            returnBuf.push(obj);
        }
    });
    return returnBuf;
}