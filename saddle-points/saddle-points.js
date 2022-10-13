//@ts-check

/**
 *
 * @param {Array<Array<number>>} matrix
 */
export const saddlePoints = (matrix) => {
  let points = [];
  for (let row = 0; row < matrix.length; row++) {
    let max = Math.max(...matrix[row]);
    let col = -1;
    while ((col = matrix[row].indexOf(max, col + 1)) !== -1) {
      if (max === Math.min(...matrix.map((r) => r[col]))) {
        points.push({ column: col + 1, row: row + 1 });
      }
    }
  }
  return points;
};
