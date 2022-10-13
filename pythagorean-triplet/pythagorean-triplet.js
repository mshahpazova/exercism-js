//@ts-check

export function triplets({ minFactor, maxFactor, sum }) {
  let min = minFactor ?? 1;
  let max = maxFactor ?? sum;
  let triplets = [];
  for (let a = min; a <= max; a++) {
    for (let b = a + 1; b <= max; b++) {
      let c = sum - a - b;
      if (c > b && c <= max && a ** 2 + b ** 2 == c ** 2) {
        triplets.push(new Triplet(a, b, c));
      }
    }
  }
  return triplets;
}

class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  toArray() {
    return [this.a, this.b, this.c];
  }
}
