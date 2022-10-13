//@ts-check

export const rows = (number) => {
  if (number === 0) {
    return [];
  }
  let result = [[1]];
  const numberAt = (row, col) => result[row][col] ?? 0;
  for (let i = 1; i < number; i++) {
    result[i] = [];
    for (let j = 0; j <= result[i - 1].length; j++) {
      result[i].push(numberAt(i - 1, j - 1) + numberAt(i - 1, j));
    }
  }
  return result;
};
