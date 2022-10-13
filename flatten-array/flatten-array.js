//@ts-check

/**
 *
 * @param {Array<any>} arr
 */
export const flatten = (arr) => {
  return arr.toString().split(",").filter(Boolean).map(Number);
};
