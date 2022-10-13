//@ts-check

/**
 *
 * @param {string} words
 */
export const translate = (words) => {
  let wordsArr = words.split(/\s+/);
  let result = [];
  for (let word of wordsArr) {
    result.push(translateWord(word));
  }
  return result.join(" ");
};

/**
 *
 * @param {string} word
 */
export const translateWord = (word) => {
  if (/^(yt|xr|[auieo])/.test(word)) {
    return word + "ay";
  }

  if (/^([^auieo]+)/.test(word)) {
    /**
     *
     * @param {string} match
     * @param {string} gr1
     * @param {string} gr2
     */
    let replacer = (match, gr1, gr2) => {
      if (gr1.length > 1 && gr1.endsWith("y")) {
        return `y${gr2}${gr1.substring(0, gr1.length - 1)}ay`;
      } else {
        return `${gr2}${gr1}ay`;
      }
    };
    return word.replace(/^([^y]+y|[^q]?qu|[^auieo]+)(.+)$/, replacer);
  }
};
