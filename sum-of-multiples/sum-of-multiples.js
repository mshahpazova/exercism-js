//@ts-check

export const sum = (multiples, number) => {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    for (let k = 0; k < multiples.length; k++) {
      if (i % multiples[k] === 0) {
        sum += i;
        break;
      }
    }
  }
  return sum;
};
