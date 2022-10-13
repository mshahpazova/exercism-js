//@ts-check

const toNumber = (digits, fromBase) => {
  return digits.reduce(
    (sum, el, index) => sum + el * fromBase ** (digits.length - index - 1),
    0
  );
};

const fromNumberToBase = (number, toBase) => {
  let converted = [];
  while (number > 0) {
    converted.push(number % toBase);
    number = Math.floor(number / toBase);
  }
  return converted.reverse();
};

export const convert = (digits, fromBase, toBase) => {
  if (fromBase <= 1) {
    throw new Error("Wrong input base");
  }

  if (toBase <= 1) {
    throw new Error("Wrong output base");
  }

  if (digits instanceof Array && digits.length === 0) {
    throw new Error("Input has wrong format");
  }
  if (digits.length === 1 && digits[0] === 0) {
    return [0];
  }

  if (digits[0] === 0) {
    throw new Error("Input has wrong format");
  }

  if (digits.some((el) => el < 0 || el >= fromBase)) {
    throw new Error("Input has wrong format");
  }

  return fromNumberToBase(toNumber(digits, fromBase), toBase);
};
