export const answer = (expression) => {
  let words = expression.replace("?", "").split(/\s+/);
  if (words[0] !== "What" || words[1] !== "is") {
    throw new Error("Unknown operation");
  }

  let operations = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiplied: (a, b) => a * b,
    divided: (a, b) => a / b,
  };

  let numberExpected = true;
  let firstOperand;
  let operation;
  for (let i = 2; i < words.length; i++) {
    let word = words[i];
    if (word in operations) {
      if (numberExpected) {
        throw new Error("Syntax error");
      }
      if (word === "multiplied" || word === "divided")
        if (words[i + 1] !== "by") {
          throw new Error("Syntax error");
        } else {
          i++;
        }
      operation = operations[word];
      numberExpected = true;
    } else if (/^\-?\d+$/.test(word)) {
      if (!numberExpected) {
        throw new Error("Syntax error");
      }
      if (operation === undefined) {
        firstOperand = parseInt(word);
      } else {
        let secondOperand = parseInt(word);
        firstOperand = operation(firstOperand, secondOperand);
      }
      numberExpected = false;
    } else {
      throw new Error("Unknown operation");
    }
  }
  if (numberExpected) {
    throw new Error("Syntax error");
  }
  return firstOperand;
};
