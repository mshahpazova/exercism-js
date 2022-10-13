//@ts-check

import { PassThrough } from "stream";
import { threadId } from "worker_threads";

export class LinkedList {
  constructor() {
    this._start = null;
  }

  push(element) {
    let node = new Node(element);
    if (this._start === null) {
      this._start = node;
      return;
    }

    let current = this._start;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    node.previous = current;
  }

  pop() {
    if (this._start === null) {
      return;
    }
    if (this._start.next === null) {
      let element = this._start.element;
      this._start = null;
      return element;
    }
    let current = this._start;
    while (current.next !== null) {
      current = current.next;
    }
    if (current.previous) {
      current.previous.next = null;
    }
    return current.element;
  }

  shift() {
    if (this._start == null) {
      return;
    }
    let node = this._start;
    if (this._start.next === null) {
      this._start = null;
      return node.element;
    }
    this._start = this._start.next;
    this._start.previous = null;
    return node.element;
  }

  unshift(element) {
    let node = new Node(element);
    if (this._start === null) {
      this._start = node;
      return;
    }
    node.next = this._start;
    this._start.previous = node;
    this._start = node;
  }

  // 97 101
  delete(element) {
    if (this._start === null) {
      return;
    }
    if (this._start.element === element && this._start.next === null) {
      this._start = null;
      return;
    }

    let current = this._start;
    while (current.next !== null && current.element !== element) {
      current = current.next;
    }
    if (current.element !== element) {
      return;
    }

    if (current.next !== null) {
      if (current.previous !== null) {
        current.previous.next = current.next;
      }
      current.next.previous = current.previous;
    } else {
      current.previous.next = null;
    }
    if (this._start === current) {
      this._start = current.next;
    }
    return current;
  }

  count() {
    if (this._start === null) {
      return 0;
    }
    let count = 1;
    let current = this._start;
    while (current.next !== null) {
      current = current.next;
      count += 1;
    }
    return count;
  }
}

export class Node {
  constructor(element) {
    this._element = element;
    this.previous = null;
    this.next = null;
  }

  get element() {
    return this._element;
  }

  get next() {
    return this._next;
  }

  set next(node) {
    this._next = node;
  }

  set previous(node) {
    this._previous = node;
  }

  get previous() {
    return this._previous;
  }

  hasNext() {
    this.next !== null ? true : false;
  }

  hasPrevious() {
    this.previous !== null ? true : false;
  }
}
