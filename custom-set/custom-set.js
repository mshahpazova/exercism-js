//@ts-check

export class CustomSet {
  constructor(elements = []) {
    this.elements = elements.reduce((acc, el) => ((acc[el] = el), acc), {});
  }

  empty() {
    return Object.keys(this.elements).length === 0;
  }

  contains(element) {
    return this.elements[element] !== undefined;
  }

  add(element) {
    this.elements[element] = element;
    return this;
    // return new CustomSet([element, ...Object.values(this.elements)]);
  }

  subset(other) {
    //every returns true for empty arrays
    return Object.values(this.elements).every((el) => other.contains(el));
  }

  disjoint(other) {
    return !Object.values(this.elements).some((el) => other.contains(el));
  }

  eql(other) {
    return (
      this.subset(other) &&
      Object.values(this.elements).length ===
        Object.values(other.elements).length
    );
  }

  union(other) {
    return new CustomSet(
      Object.values(this.elements).concat(Object.values(other.elements))
    );
  }

  intersection(other) {
    return new CustomSet(
      Object.values(other.elements).filter((el) => this.contains(el))
    );
  }

  difference(other) {
    return new CustomSet(
      Object.values(this.elements).filter((el) => !other.contains(el))
    );
  }
}
