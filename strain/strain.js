//@ts-check

export const keep = (arr, f) => {
  let result = [];
  for (let el of arr) {
    if (f(el)) {
      result.push(el);
    }
  }
  return result;
};

export const discard = (arr, f) => {
  let result = [];
  for (let el of arr) {
    if (!f(el)) {
      result.push(el);
    }
  }
  return result;
};
