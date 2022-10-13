//@ts-check

/**
 *
 * @param {string} strand
 * @returns {string}
 */
export function countNucleotides(strand) {
  let nucleotides = { A: 0, C: 0, G: 0, T: 0 };
  const throwError = () => {
    throw new Error("Invalid nucleotide in strand");
  };
  for (let n of Array.from(strand)) {
    nucleotides[n] !== undefined ? (nucleotides[n] += 1) : throwError();
  }
  return Object.values(nucleotides).join(" ");
}
