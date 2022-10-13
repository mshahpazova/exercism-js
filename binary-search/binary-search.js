//@ts-check

/**
 *
 * @param {Array<number>} numbers
 * @param {number} number
 * @returns {number}
 */
export const find = (numbers, number) => {
  if ((numbers.length === 1 && numbers[0] !== number) || numbers.length === 0) {
    throw new Error("Value not in array");
  }

  let mid = Math.floor(numbers.length / 2);
  let start;
  let end;
  if (number < numbers[mid]) {
    start = 0;
    end = mid - 1;
  } else if (number > numbers[mid]) {
    start = mid + 1;
    end = numbers.length - 1;
  } else {
    return mid;
  }
  let arr = numbers.slice(start, end + 1);
  return start + find(arr, number);
};
