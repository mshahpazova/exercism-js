//@ts-check
export const encode = (letters, rails) => {
  let arr = new Array(rails).fill().map((el) => new Array());

  let index = 0;
  let direction = 1;
  for (let i = 0; i < letters.length; i++) {
    arr[index].push(letters[i]);
    index += direction;
    if (index === rails - 1) {
      direction = -1;
    }
    if (index === 0) {
      direction = 1;
    }
  }
  return arr.map((a) => a.join("")).join("");
};

export const decode = (letters, rails) => {
  let step;
  let maxStep = (rails - 1) * 2;
  let decoded = new Array(letters.length);
  let seqIndex = 0;
  let stepIndex = 0;
  for (let i = rails - 1; i >= 0; i--) {
    step = i * 2 || maxStep;
    stepIndex = rails - 1 - i;
    while (stepIndex < letters.length) {
      decoded[stepIndex] = letters[seqIndex];
      stepIndex += step;
      seqIndex += 1;
      step = maxStep - step || maxStep;
    }
  }
  return decoded.join("");
};
