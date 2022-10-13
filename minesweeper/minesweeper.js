//@ts-check

const getCloseSquares = (position) => {
  let [row, col] = position;
  return [
    [row - 1, col - 1],
    [row - 1, col],
    [row - 1, col + 1],
    [row, col - 1],
    [row, col + 1],
    [row + 1, col - 1],
    [row + 1, col],
    [row + 1, col + 1],
  ];
};
export const annotate = (input) => {
  let result = new Array(input.length)
    .fill()
    .map((el) => new Array(input[0].length));

  for (let row = 0; row < input.length; row++) {
    for (let col = 0; col < input[0].length; col++) {
      if (input[row][col] !== "*") {
        let closeSquares = getCloseSquares([row, col]);
        let count = 0;
        for (let square of closeSquares) {
          let [row, col] = square;
          if (input[row]?.[col] === "*") {
            count++;
          }
        }
        result[row][col] = count || " ";
      } else {
        result[row][col] = "*";
      }
    }
  }
  return result.map((el) => el.join(""));
};
