//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  static generate({ maxFactor, minFactor }) {
    if (minFactor > maxFactor) {
      throw new Error("min must be <= max");
    }
    let products = {};
    let largest = null;
    let smallest = null;
    for (let i = minFactor; i <= maxFactor; i++) {
      let found = false;
      for (let j = i; j <= maxFactor; j++) {
        if (this.isPalindrome) {
          smallest = {
            value: i * j,
            factors: [[i, j]],
          };
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }

    for (let i = maxFactor; i >= minFactor; i--) {
      let found = false;
      for (let j = i; j >= minFactor; j--) {
        if (this.isPalindrome(i * j)) {
          largest = {
            value: i * j,
            factors: [[i, j]],
          };
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
    // for(let i = minFactor; i <= maxFactor; i++){
    //   for(let j = i; j <= maxFactor; j++){
    //     let productKey = `${i * j}`;

    //     if(products[productKey] || Palindromes.isPalindrome(productKey)){
    //       if (!products[productKey]){
    //         products[productKey] = [];
    //       }
    //       products[productKey].push([i, j]);
    //     }
    //   }
    // }
    // let palindromes = Object.keys(products).map(Number);

    // let largest = palindromes.length ?  Math.max(...palindromes) : null;
    // let smallest = palindromes.length ? Math.min(...palindromes) : null;

    return { largest, smallest };
  }
  /**
   * @param {number} number
   */
  static isPalindrome(number) {
    let reversedNumber = number.toString().split("").reverse().join("");
    return number.toString() === reversedNumber;
  }
}
