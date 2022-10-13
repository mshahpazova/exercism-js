//@ts-check

/**
 *
 * @param {string} word
 * @returns {boolean}
 */
export const isIsogram = (word) => {
  let lettersCount = Array.from(word.replace(/\W/, "").toLowerCase()).reduce(
    (acc, l) => ((acc[l] = (acc[l] ?? 0) + 1), acc),
    {}
  );
  return !Object.values(lettersCount).some((count) => count !== 1);
};
