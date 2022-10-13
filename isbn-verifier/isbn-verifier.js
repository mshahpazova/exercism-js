//@ts-check

/**
 *
 * @param {string} isbn
 * @returns {boolean}
 */
export const isValid = (isbn) => {
  let initialString = isbn.replace(/\-/g, "");
  if (initialString.length !== 10) {
    return false;
  }
  if (!/^\d+X?$/.test(initialString)) {
    return false;
  }

  let nums = initialString
    .split("")
    .map((num) => (num === "X" ? 10 : Number(num)));
  return nums.reduce((acc, x, i) => acc + x * (10 - i), 0) % 11 === 0;
};
