//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {string} sequence
 * @returns {string}
 */
export const toRna = (sequence) => {
  let rnaNucleotides = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  return sequence
    .split("")
    .map((x) => rnaNucleotides[x])
    .join("");
};
