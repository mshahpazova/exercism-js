import { Z_ASCII } from "zlib";

//@ts-check
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export class Robot {
  static allNames = new Set();
  constructor() {
    this._name = Robot.releaseNames();
  }

  get name() {
    return this._name;
  }

  reset() {
    this._name = Robot.releaseNames();
  }

  static releaseNames() {
    const getRandomInt = (max) => Math.floor(Math.random() * max);

    let name;
    do {
      let letters = Array(2)
        .fill()
        .map(() => ALPHABET[getRandomInt(ALPHABET.length - 1)])
        .join("")
        .toUpperCase();

      let numbers = Array(3)
        .fill()
        .map(() => getRandomInt(9))
        .join("");
      name = letters + numbers;
    } while (Robot.allNames.has(name));
    this.allNames.add(name);
    return name;
  }
}
