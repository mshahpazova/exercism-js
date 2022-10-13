// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return toDecimal(array1) + toDecimal(array2);
}

/**
 * 
 * @param {number[]} array 
 * @returns {number} converts an array to a number
 */
function toDecimal(array){
  return array.reduce((acc, x, i) => acc + x * (10 ** (array.length - i - 1)), 0)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return value.toString() === value.toString().split('').reverse().join('');
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input){
    return 'Required field'
  }
  let inputAsString = input.trim().replace(".", "");

  let inputAsNum = parseInt(inputAsString, 10); 
  if (isNaN(inputAsNum) || inputAsNum === 0 || /[^0-9\.e]/.test(inputAsString)){
    return 'Must be a number besides 0';
  }
  return '';
}
