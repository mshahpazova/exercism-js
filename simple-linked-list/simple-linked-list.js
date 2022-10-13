//@ts-check

export class Element {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }
}

export class List {
  constructor(elements) {
    if (!elements || (elements instanceof Array && elements.length === 0)) {
      this._head = null;
      return;
    }
    this._head = new Element(elements[elements.length - 1]);
    let current = this._head;
    for (let i = elements.length - 2; i >= 0; i--) {
      current._next = new Element(elements[i]);
      current = current._next;
    }
  }

  add(nextNode) {
    if (this.head === null) {
      this._head = nextNode;
      return;
    }

    let next = this.head;
    this._head = nextNode;
    this.head._next = next;
  }

  get length() {
    if (this.head === null) {
      return 0;
    }

    let current = this.head;
    let count = 1;
    while (current.next !== null) {
      current = current.next;
      count += 1;
    }
    return count;
  }

  get head() {
    return this._head;
  }

  toArray() {
    if (this.head === null) {
      return [];
    }

    let result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current._value);
      current = current._next;
    }
    return result;
  }

  reverse() {
    if (this.head === null) {
      return new List();
    }
    let list = new List([]);

    let current = this.head;

    while (current !== null) {
      list.add(new Element(current._value));
      current = current.next;
    }

    return list;
  }
}
