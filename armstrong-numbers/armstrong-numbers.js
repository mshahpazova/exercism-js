//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * @param {number} number 
 */
export const isArmstrongNumber = (number) => {
  let numArr = number.toString().split('').map(n => Number(n));
  let result = numArr.reduce((a,b) => a + b ** numArr.length, 0);
  return result === number;
};
