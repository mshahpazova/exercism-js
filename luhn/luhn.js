//@ts-check

// 4539 3195 0343 6467

/**
 *
 * @param {string} number
 */
export const valid = (number) => {
  if (number.trim() === "0") {
    return false;
  }
  let reversed = number.replace(/\s+/g, "").split("").reverse().map(Number);

  //prettier-ignore
  return (
    reversed
      .map((num, i) => {
        if(i % 2 !== 0){
          num = num * 2;
          return num > 9 ? num - 9 : num;
        }
        return num;
      })
      .reduce((acc, el) => acc + el, 0) % 10 === 0);
};
