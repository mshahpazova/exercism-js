//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
export const score = (x, y) => {
  if (x * x + y * y <= 1) {
    return 10;
  }
  if (x * x + y * y <= 5 * 5) {
    return 5;
  }
  if (x * x + y * y <= 10 * 10) {
    return 1;
  }
  return 0;
};
