//@ts-check

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
//prettier-ignore
/**
 *
 * @param {string} text
 * @param {number} rotation
 * @returns {string}
 */
export const rotate = (text, rotation) => {
  const encodeLetter = (l) => {
    if (/[^a-zA-Z]/.test(l)) {
      return l;
    }
    let isCapital = /[A-Z]/.test(l);
    let index = (ALPHABET.indexOf(l.toLowerCase()) + rotation) % ALPHABET.length;
    let encoded = ALPHABET[index];
    return isCapital ? encoded.toUpperCase() : encoded;
  };
  return Array.from(text).map(encodeLetter).join("");
};
