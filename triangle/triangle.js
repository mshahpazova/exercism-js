export class Triangle {
  constructor(...sides) {
    [this.a, this.b, this.c] = sides.sort();
  }

  get isValid() {
    return this.a + this.b > this.c;
  }

  get isEquilateral() {
    return this.isValid && this.a === this.b && this.b === this.c;
  }

  get isIsosceles() {
    return this.isValid && (this.a === this.b || this.b === this.c);
  }

  get isScalene() {
    return (
      this.isValid &&
      this.a !== this.b &&
      this.b !== this.c &&
      this.c !== this.a
    );
  }
}
