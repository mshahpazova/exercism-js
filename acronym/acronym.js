//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**
 * 
 * @param {string} words 
 * @returns 
 */
export const parse = (words) => {
  let arr_words = words.split(/[\s_\-]+/);
  return arr_words.map((word) => word[0].toUpperCase()).join('');
};
