// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  switch (kind) {
    case 'car':
    case 'truck':
      return true;
    default:
      return false;
  }
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  let vehicle;
  if (option1 < option2){
    vehicle = option1;
  }
  else {
    vehicle = option2;
  }
  return `${vehicle} is clearly the better choice.`
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3){
    return originalPrice * 0.8;
  }
  if (age >= 3 && age <= 10) {
    return originalPrice * 0.7;
  }
  if (age > 10){
    return originalPrice * 0.5;
  }
}
