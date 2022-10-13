//@ts-check

/**
 *
 * @param {number} number
 */
export const primeFactors = (number) => {
  let result = [];
  for (let i = 2; i <= number; i++) {
    while (number % i === 0) {
      number = Math.floor(number / i);
      result.push(i);
    }
  }
  return result;
};
