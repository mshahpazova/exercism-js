//@ts-check

export const spiralMatrix = (n) => {
  let max = n ** 2;
  let newMatrix = new Array(n).fill().map((el) => new Array(n).fill());
  let row = 0;
  let col = 0;
  let directions = ["r", "d", "l", "u"];
  let changes = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let direction = 0;

  const availablePosition = (row, col) => {
    return (
      row < newMatrix.length &&
      row >= 0 &&
      col < newMatrix[0].length &&
      col >= 0 &&
      newMatrix[row][col] === undefined
    );
  };

  for (let i = 1; i <= max; i++) {
    newMatrix[row][col] = i;

    row += changes[direction][0];
    col += changes[direction][1];

    if (!availablePosition(row, col)) {
      row -= changes[direction][0];
      col -= changes[direction][1];
      direction = (direction + 1) % directions.length;
      row += changes[direction][0];
      col += changes[direction][1];
    }
  }
  return newMatrix;
};
