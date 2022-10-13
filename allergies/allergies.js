//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALLERGIES = [
  "eggs",
  "peanuts",
  "shellfish",
  "strawberries",
  "tomatoes",
  "chocolate",
  "pollen",
  "cats",
];

const ALLERGIES_MAP = {
  1: "eggs",
  2: "peanuts",
  4: "shellfish",
  8: "strawberries",
  16: "tomatoes",
  32: "chocolate",
  64: "pollen",
  128: "cats",
};
export class Allergies {
  constructor(number) {
    this.number = number;
    this.binary = convertToBinary(number);
  }

  list() {
    // return ALLERGIES.filter((x, i) => this.binary[i]);
    return this.binary
      .map((x, i) => (x ? ALLERGIES_MAP[2 ** i] : null))
      .filter(Boolean);
  }

  allergicTo(substance) {
    return this.list().includes(substance);
    // return Boolean(this.number & (1 << ALLERGIES.indexOf(substance)));
  }
}

function convertToBinary(number) {
  let binary = [];
  while (number > 0) {
    binary.push(number % 2);
    number = Math.floor(number / 2);
  }
  return binary;
}
