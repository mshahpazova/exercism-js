//@ts-check

const digits = [
  "    _  _     _  _  _  _  _  _ ",
  "  | _| _||_||_ |_   ||_||_|| |",
  "  ||_  _|  | _||_|  ||_| _||_|",
].map((str) => str.split(""));

const digitsCols = {
  1: 0,
  2: 3,
  3: 6,
  4: 9,
  5: 12,
  6: 15,
  7: 18,
  8: 21,
  9: 24,
  0: 27,
};
// row,     col     => 0, 6;
// row,     col + 1 => 0, 7;
// row,     col + 2 => 0, 8;
// row + 1, col     => 1, 6;
// row + 1, col + 1 => 1, 7;
// row + 1, col + 2 => 1, 8;
// row + 2, col     => 2, 6;
// row + 2, col + 1 => 2, 7;
// row + 2, col + 2 => 2, 8;

function foundAnyDigit(coords, matrix) {
  for (let digit = 0; digit <= 9; digit++) {
    if (foundSpecificDigit(digit, coords, matrix)) {
      return digit;
    }
  }
  return -1;
}

function foundSpecificDigit(digit, coords, matrix) {
  let [row, col] = coords;
  for (let i = 0; i <= 2; i++) {
    let digitCol = digitsCols[digit];
    for (let j = digitCol; j <= digitCol + 2; j++) {
      if (matrix[row + i][col + j - digitCol] !== digits[i][j]) {
        return false;
      }
    }
  }
  return true;
}

export const convert = (matrix) => {
  matrix = matrix.split("\n").map((str) => str.split(""));
  let result = "";
  for (let row = 0; row < matrix.length; row += 4) {
    for (let col = 0; col < matrix[0].length; col += 3) {
      let digit = foundAnyDigit([row, col], matrix);
      result += digit === -1 ? "?" : digit;
    }
    result += ",";
  }
  return result.slice(0, -1);
};
