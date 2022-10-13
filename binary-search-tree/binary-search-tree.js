//@ts-check

import { threadId } from "worker_threads";

export class BinarySearchTree {
  constructor(element) {
    this._element = element;
    this._left = null;
    this._right = null;
  }

  get data() {
    return this._element;
  }

  get left() {
    return this._left;
  }

  get right() {
    return this._right;
  }

  insert(newElement) {
    let current = this;
    let parent = this;
    while (current !== null) {
      if (newElement > current.data) {
        parent = current;
        current = current.right;
      } else {
        parent = current;
        current = current.left;
      }
    }
    if (newElement > parent.data) {
      parent._right = new BinarySearchTree(newElement);
      return;
    }
    parent._left = new BinarySearchTree(newElement);
  }

  each(f) {
    if (this._left !== null) {
      this._left.each(f);
    }
    f(this.data);
    if (this._right !== null) {
      this._right.each(f);
    }
  }
}
