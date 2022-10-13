//@ts-check

export class Matrix {
  constructor(elements) {
    this._rows = elements
      .split("\n")
      .map((el) => el.split(" ").map((el) => Number(el)));
    // this._rows = elements
    //   .split("\n")
    //   .reduce(
    //     (acc, el) => (acc.push(el.split(" ").map((el) => Number(el))), acc),
    //     []
    //   );
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this.rows[0].map((el, index) => this.rows.map((row) => row[index]));
  }
}

//    c o l
// r  1 2 3 4
// o  2 3 4 6
// w  7 9 8 3
