const findUpperRightCorners = (matrix, row, col) => {
  let corners = [];
  for (let i = col + 1; i < matrix[row].length; i++) {
    if (matrix[row][i] === "-") {
      continue;
    }
    if (matrix[row][i] === "+") {
      corners.push(i);
    }
    if (matrix[row][i] === " ") {
      break;
    }
  }
  return corners;
};
//upper corners = [[2, 4], [2, 7]]
const findBottomCorners = (matrix, upperCorners) => {
  let corners = 0;
  let [leftUpper, rightUpper] = upperCorners;
  let leftCol = leftUpper[1];
  let rightCol = rightUpper[1];
  for (let i = leftUpper[0] + 1; i < matrix.length; i++) {
    if (matrix[i][leftCol] === "+" && matrix[i][rightCol] === "+") {
      corners++;
    } else if (
      (matrix[i][leftCol] !== "|" && matrix[i][leftCol] !== "+") ||
      (matrix[i][rightCol] !== "|" && matrix[i][rightCol] !== "+")
    ) {
      break;
    }
  }
  return corners;
};

export function count(matrix) {
  let count = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === "+") {
        let upperRightCornersCols = findUpperRightCorners(matrix, row, col);
        for (let upperRightCol of upperRightCornersCols) {
          count += findBottomCorners(matrix, [
            [row, col],
            [row, upperRightCol],
          ]);
        }
      }
    }
  }
  return count;
}
