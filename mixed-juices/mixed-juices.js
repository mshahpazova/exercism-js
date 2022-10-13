// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'All or Nothing':
      return 5;
    case 'Tropical Island':
      return 3;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCount = 0;
  let numberOfLimes = 0;

  const getWedges = (limeSize) => {
    switch (limeSize) {
      case 'small':
        return 6;
      case 'medium':
        return 8;
      case 'large':
        return 10;
    }
  }
  for(let lime of limes){
    if (wedgesCount >= wedgesNeeded){
      break;
    }
    wedgesCount += getWedges(lime);
    numberOfLimes += 1;
  }
  return numberOfLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeUsedDuringShift = 0;
  let indexLastJuice;
  
  for (let i = 0; i < orders.length; i++){
    if (timeUsedDuringShift >= timeLeft){
      indexLastJuice = i;
      break;
    }
    timeUsedDuringShift += timeToMixJuice(orders[i]);
  }
  return indexLastJuice ? orders.slice(indexLastJuice) : [];
}
