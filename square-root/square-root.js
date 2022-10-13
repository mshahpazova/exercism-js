//@ts-check

/**
 *
 * @param {number} number
 * @returns {number}
 */
export const squareRoot = (number) => {
  if (number === 1) {
    return 1;
  }
  for (let i = Math.floor(number / 2); i > 1; i--) {
    if (i * i === number) {
      return i;
    }
  }
  return -1;
};
