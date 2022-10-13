//@ts-check

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
export class Cipher {
  constructor(key) {
    this._key = key ?? this.generateKey();
  }

  generateKey() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    return new Array(10)
      .fill()
      .map((el) => ALPHABET[getRandomInt(ALPHABET.length - 1)])
      .join("");
  }

  /**
   *
   * @param {string} message
   * @returns {string}
   */
  encode(message) {
    return message
      .split("")
      .map((letter, i) => {
        let newIndex =
          ALPHABET.indexOf(letter) +
          ALPHABET.indexOf(this.key[i % this.key.length]);
        return ALPHABET[newIndex % ALPHABET.length];
      })
      .join("");
  }

  /**
   *
   * @param {string} message
   * @returns {string}
   */
  decode(message) {
    let encoded = message.split("");
    let decoded = "";
    for (let i = 0; i < encoded.length; i++) {
      let offSet =
        ALPHABET.indexOf(encoded[i]) -
        ALPHABET.indexOf(this.key[i % this.key.length]);
      let newIndex = offSet < 0 ? ALPHABET.length - Math.abs(offSet) : offSet;
      decoded += ALPHABET[newIndex];
    }
    return decoded;
  }

  get key() {
    return this._key;
  }
}
