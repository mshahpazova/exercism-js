//@ts-check

/**
 *
 * @param {String} sentence
 * @returns {Boolean}
 */
export const isPangram = (sentence) => {
  const ALPHABET_LENGTH = 26;
  let letters = sentence.toLowerCase().replace(/[^a-z]/g, "");
  let occurances = {};
  for (let letter of letters) {
    occurances[letter] = true;
  }
  return Object.keys(occurances).length === ALPHABET_LENGTH;
};
