//@ts-check
export class List {
  constructor(array) {
    this._array = array ?? [];
  }

  get values() {
    return this._array;
  }

  compare(other) {
    if (this.values.length === other.values.length) {
      for (let i = 0; i < this.values.length; i++) {
        if (this.values[i] !== other.values[i]) {
          return "UNEQUAL";
        }
      }
      return "EQUAL";
    }
    if (this.values.length < other.values.length) {
      if (this.values.length === 0) {
        return "SUBLIST";
      }
      const firstElement = this.values[0];
      let indexOfStart = other.values.indexOf(firstElement);
      if (
        indexOfStart === -1 ||
        indexOfStart + this.values.length > other.values.length
      ) {
        return "UNEQUAL";
      }
      while (indexOfStart !== -1) {
        if (this.searchSubArray(indexOfStart, other.values)) {
          return "SUBLIST";
        }
        indexOfStart = other.values.indexOf(firstElement, indexOfStart + 1);
      }
      return "UNEQUAL";
    }
    return other.compare(this) === "SUBLIST" ? "SUPERLIST" : "UNEQUAL";
  }

  searchSubArray(indexOfStart, otherArray) {
    for (let i = 0; i < this.values.length; i++) {
      if (this.values[i] !== otherArray[i + indexOfStart]) {
        return false;
      }
    }
    return true;
  }
}
