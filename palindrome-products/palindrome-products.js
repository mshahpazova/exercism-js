export class Palindromes {
  static generate({ maxFactor, minFactor }) {
    if (minFactor > maxFactor) {
      throw new Error("min must be <= max");
    }
    //    34567 -> 76430

    //    67804
    //   }

    // 34 000 -> 67 000
    // 72427
    function generatePalindrome(numberOfDigits, lowerBound, uppperBound) {
      let numberOfLoops = Math.floor(numberOfDigits / 2 + (numberOfDigits % 2));
      let minFirstDigit = lowerBound / Math.pow(10, numberOfDigits - 1);
      let maxFirstDgit = upperBound / Math.pow(10, numberOfDigits - 1);
      for (let i = minFirstDigit; i <= maxFirstDgit; i++) {
        for (let j = 0; j <= 9; j++) {
          for (let k = 0; k <= 9; k++) {
            let palindrome = i * 10000 + j * 1000 + k * 100 + j * 10 + i;
            if (palindrome < lowerBound || palindrome > upperBound) {
              continue;
            }
          }
        }
      }
    }
  }
  /**
   * @param {number} number
   */
  static isPalindrome(number) {
    let reversedNumber = Number(number.toString().split("").reverse().join(""));
    return number === reversedNumber;
  }
}
