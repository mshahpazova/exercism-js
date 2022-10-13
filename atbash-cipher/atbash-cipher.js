//@ts-check

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const ENCODED = ALPHABET.split("").reverse().join("");

/**
 *
 * @param {string} words
 */
export const encode = (words) => {
  let onlyLetters = words
    .toLowerCase()
    .replace(/[\s,\.]+/g, "")
    .split("");
  return onlyLetters
    .reduce(
      (acc, letter) => (acc += ENCODED[ALPHABET.indexOf(letter)] ?? letter),
      ""
    )
    .match(/.{1,5}/g)
    .join(" ");
};

export const decode = (gibberish) => {
  return gibberish
    .replace(/\s+/g, "")
    .split("")
    .map((letter) => ALPHABET[ENCODED.indexOf(letter)] ?? letter)
    .join("");
};
