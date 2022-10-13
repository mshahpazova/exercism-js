export const toRoman = (number) => {
  //prettier-ignore
  let replacements = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], 
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], 
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  ];

  let ones = number % 10;
  let tens = Math.floor((number % 100) / 10);
  let hundreds = Math.floor(number / 100) % 10;
  let thousands = Math.floor(number / 1000);

  let result = "M".repeat(thousands);
  result += replacements[2][hundreds];
  result += replacements[1][tens];
  result += replacements[0][ones];
  return result;
};
