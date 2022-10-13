//@ts-check

export class Rational {
  /**
   *
   * @param {number} numerator
   * @param {number} denominator
   */
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  add(other) {
    let newNumerator =
      this.numerator * other.denominator + other.numerator * this.denominator;
    let newDenominator = this.denominator * other.denominator;

    return new Rational(newNumerator, newDenominator).reduce();
  }

  sub(other) {
    let newEnumerator =
      this.numerator * other.denominator - other.numerator * this.denominator;

    return new Rational(
      newEnumerator,
      this.denominator * other.denominator
    ).reduce();
  }

  mul(other) {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator
    ).reduce();
  }

  div(other) {
    let newNumerator = this.numerator * other.denominator;
    let newDenominator = this.denominator * other.numerator;
    return new Rational(newNumerator, newDenominator).reduce();
  }

  abs() {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }
  /**
   *
   * @param {number} power
   */
  exprational(power) {
    if (power === 0) {
      return new Rational(1, 1);
    }

    let numerator = new Array(power)
      .fill(this.numerator)
      .reduce((acc, el) => acc * el);
    let denominator = new Array(power)
      .fill(this.denominator)
      .reduce((acc, el) => acc * el);
    return power > 0
      ? new Rational(numerator, denominator)
      : new Rational(denominator, numerator);
  }

  expreal(base) {
    let result = Math.pow(base, this.numerator / this.denominator);
    if (result - Math.floor(result) < 0.01) {
      return Math.floor(result);
    } else if (Math.ceil(result) - result < 0.01) {
      return Math.ceil(result);
    }
    return result;
  }

  reduce() {
    if (this.numerator === 0) {
      return new Rational(0, 1);
    }
    let absNumerator = Math.abs(this.numerator);
    let absDenominator = Math.abs(this.denominator);
    let larger = absDenominator > absNumerator ? absDenominator : absNumerator;
    let smaller = absDenominator < absNumerator ? absDenominator : absNumerator;
    let numerator = this.numerator;
    let denominator = this.denominator;
    if (larger % smaller === 0) {
      numerator = Math.floor(this.numerator / smaller);
      denominator = Math.floor(this.denominator / smaller);
    } else {
      for (let i = Math.floor(smaller / 2); i > 1; i--) {
        if (smaller % i === 0 && larger % i === 0) {
          numerator = Math.floor(this.numerator / i);
          denominator = Math.floor(this.denominator / i);
          break;
        }
      }
    }
    if (denominator < 0) {
      return new Rational(numerator * -1, denominator * -1);
    }
    return new Rational(numerator, denominator);
  }
}
