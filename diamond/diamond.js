//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let index = alphabet.indexOf(letter);

  let result = [];
  let empty = " ";
  result.push(empty.repeat(index - 0) + alphabet[0] + empty.repeat(index - 0));

  let middleSpace = 1;
  for (let i = 1; i <= index; i++) {
    result.push(
      empty.repeat(index - i) +
        alphabet[i] +
        empty.repeat(middleSpace) +
        alphabet[i] +
        empty.repeat(index - i)
    );
    middleSpace += 2;
  }

  for (let i = index - 1; i >= 0; i--) {
    result.push(result[i]);
  }

  return result;
};
