//@ts-check

/**
 *
 * @param {number} n
 * @returns {number}
 */
export const steps = (n) => {
  if (n <= 0) {
    throw new Error("Only positive numbers are allowed");
  }
  let steps = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = n * 3 + 1;
    }
    steps++;
  }
  return steps;
};
