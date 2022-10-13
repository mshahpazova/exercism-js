//@ts-check

/**
 *
 * @param {string} word
 * @param {string[]} words
 * @returns {string[]}
 */
export const findAnagrams = (word, words) => {
  let wordToLower = word.toLowerCase();
  let sortedWord = Array.from(wordToLower).sort().join("");
  /**
   * @param {string} word2
   * @returns {boolean}
   */
  const isAnagram = (word2) => {
    if (wordToLower === word2) {
      return false;
    }

    return sortedWord === word2.split("").sort().join("");
  };

  return words.filter((w) => isAnagram(w.toLowerCase()));
};
