const alphabet = "abcdefghijklmnopqrstuvwxyz";

// const areCoprime = (large, small) => {
//   while (large !== small){
//     large = large - small;
//     if (large < small){
//       [large, small] = [small, large];
//     }
//   }
//   return large === 1;
// }

const areCoprime = (large, small) => {
  while (large !== small) {
    large = large % small;

    if (large === 0) {
      return small === 1;
    }
    if (large < small) {
      [large, small] = [small, large];
    }
  }
  return large === 1;
};

export const encode = (phrase, key) => {
  const { a, b } = key;
  if (!areCoprime(a, alphabet.length)) {
    throw new Error("a and m must be coprime.");
  }
  return phrase
    .toLowerCase()
    .replace(/[\W_]/g, "")
    .split("")
    .reduce((acc, letterOrDigit) => {
      let originalIndex = alphabet.indexOf(letterOrDigit);
      let encodedIndex = (a * originalIndex + b) % alphabet.length;
      acc += originalIndex !== -1 ? alphabet[encodedIndex] : letterOrDigit;
      return acc;
    }, "")
    .match(/.{1,5}/g)
    .join(" ");
};

const findInverseNumber = (num, mod) => {
  if (num === 1 || num === mod - 1) {
    return num;
  }
  for (let i = 2; i <= mod - 2; i++) {
    if ((num * i) % mod === 1) {
      return i;
    }
  }
  return -1;
};
export const decode = (phrase, key) => {
  const { a, b } = key;
  let inverseA = findInverseNumber(a, alphabet.length);
  if (!areCoprime(a, alphabet.length)) {
    throw new Error("a and m must be coprime.");
  }
  return phrase
    .replace(/\s+/g, "")
    .split("")
    .map((letterOrDigit) => {
      let index = alphabet.indexOf(letterOrDigit);
      if (index === -1) {
        return letterOrDigit;
      }
      let newIndex =
        (inverseA *
          (index +
            alphabet.length * (1 + Math.floor(b / alphabet.length)) -
            b)) %
        alphabet.length;
      return alphabet[newIndex];
    })
    .join("");
};
