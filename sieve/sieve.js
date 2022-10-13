//@ts-check

/**
 *
 * @param {number} range
 * @return {Array<number>}
 */
export const primes = (range) => {
  let primes = new Array(range + 1).fill();
  primes[0] = primes[1] = 0;
  for (let i = 2; i < primes.length; i++) {
    if (primes[i] !== 0) {
      primes[i] = i;
      for (let j = i + 1; j < primes.length; j++) {
        if (j % i === 0) {
          primes[j] = 0;
        }
      }
    }
  }
  return primes.filter((el) => el !== 0);
};

const isPrime = (number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
