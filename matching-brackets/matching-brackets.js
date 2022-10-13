export const isPaired = (str) => {
  let openingBrackets = ["{", "(", "["];
  let closingBrackets = ["}", ")", "]"];
  let symbols = str.split("");
  let stack = [];

  for (let i = 0; i < symbols.length; i++) {
    if (openingBrackets.includes(symbols[i])) {
      stack.push(symbols[i]);
    } else if (closingBrackets.includes(symbols[i])) {
      let popped = stack.pop();
      if (
        closingBrackets.indexOf(symbols[i]) !== openingBrackets.indexOf(popped)
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
