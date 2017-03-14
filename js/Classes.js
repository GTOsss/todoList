export class Task {
    constructor(arrayCards, id) {
        this.cards = arrayCards;
        this.id = id;
    }

    toString() {
        return id + ', ' + cards.toString();
    }
}

export class Card  {
    constructor(title, body, id) {
        this.title = title;
        this.body = body;
        this.id = id;
    }

    toString() {
        return '(' + this.title + ', ' + this.body + ')';
    }
}
