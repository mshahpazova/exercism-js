//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...words) => {
  if (words.length === 0) {
    return "";
  }

  let qualifier =
    typeof words[words.length - 1] === "object" ? words.pop().qualifier : "";

  let result = "";
  for (let i = 0; i < words.length - 1; i++) {
    result += `For want of a ${words[i]} the ${words[i + 1]} was lost.\n`;
  }
  if (qualifier) {
    result += `And all for the want of a ${qualifier} ${words[0]}.`;
  } else {
    result += `And all for the want of a ${words[0]}.`;
  }
  return result;
};
