//@ts-check

/**
 *
 * @param {*} number
 */
export const prime = (number) => {
  if (number === 0) {
    throw new Error("there is no zeroth prime");
  }
  let count = 0;
  let prime = 1;
  while (count < number) {
    prime++;
    if (isPrime(prime)) {
      count++;
    }
  }
  return prime;
};

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
