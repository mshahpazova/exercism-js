//@ts-check
export class Squares {
  /**
   *
   * @param {number} maxNumber
   */
  constructor(maxNumber) {
    this._maxNumber = maxNumber;
  }

  get sumOfSquares() {
    let arr = new Array(this._maxNumber).fill().map((_, index) => index + 1);
    return arr.reduce((acc, el) => acc + el ** 2, 0);
  }

  get squareOfSum() {
    let arr = new Array(this._maxNumber).fill().map((_, index) => index + 1);
    let sum = arr.reduce((acc, el) => acc + el, 0);
    return sum ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
