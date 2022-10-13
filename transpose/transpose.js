//@ts-check

export const transpose = (matrix) => {
  if (matrix.length === 0) {
    return [];
  }
  let longestRowLength = Math.max(...matrix.map((el) => el.length));
  let transpose = [];
  let newRow = "";
  for (let col = 0; col < longestRowLength; col++) {
    for (let row = 0; row < matrix.length; row++) {
      newRow += matrix[row][col] || " ";
    }
    transpose.push(newRow);
    newRow = "";
  }
  transpose[transpose.length - 1] = transpose[transpose.length - 1].trimEnd();
  return transpose;
};

// export const transpose = (matrix) => {
//   let transpose = [];
//   for (let row = 0; row < matrix.length; row++){
//     for (let col = 0; col < matrix[row].length; col++){
//       transpose[col] = (transpose[col] || '') + (matrix[row][col] || ' ');
//     }
//   }
//   return transpose;
// };

// let mat = ["ABC", "DEF"];
// let spl = mat.map((el) => el.split(""));
// console.log(spl);
// let res = spl[0].map((el, index) => spl.map((el) => el[index]));
