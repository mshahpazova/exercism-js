//@ts-check

export class List {
  constructor(elements) {
    this._elements = elements ?? [];
  }

  get values() {
    return this._elements;
  }

  /**
   *
   * @param {List} list
   */
  append(list) {
    return new List([...this._elements, ...list.values]);
  }

  /**
   *
   * @param {List} list
   */
  concat(list) {
    let result = this._elements;
    for (let element of list.values) {
      result = [...result, ...element.values];
    }
    return new List(result);
  }

  filter(predicate) {
    let filtered = [];
    for (let element of this._elements) {
      if (predicate(element)) {
        filtered.push(element);
      }
    }
    return new List(filtered);
  }

  map(predicate) {
    let mapped = [];
    for (let element of this._elements) {
      mapped.push(predicate(element));
    }
    return new List(mapped);
  }

  length() {
    let length = 0;
    for (let element of this._elements) {
      length += 1;
    }
    return length;
  }

  foldl(predicate, initialValue) {
    let result = initialValue;
    for (let element of this._elements) {
      result = predicate(result, element);
    }
    return result;
  }

  foldr(predicate, initialValue) {
    // return this.reverse().foldl(predicate, initialValue);
    let result = initialValue;
    for (let element of this.reverse().values) {
      result = predicate(result, element);
    }
    return result;
  }

  reverse() {
    let reversed = [];
    for (let i = this._elements.length - 1; i >= 0; i--) {
      reversed.push(this._elements[i]);
    }
    return new List(reversed);
  }
}
