//@ts-check

/**
 *
 * @param {string} strand1
 * @param {string} strand2
 */
export const compute = (strand1, strand2) => {
  if (strand1.length !== strand2.length) {
    throw new Error("strands must be of equal length");
  }
  return Array.from(strand1).filter((n, i) => n !== strand2[i]).length;
};
