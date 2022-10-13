//@ts-check

/**
 *
 * @param {Record<string, Array<string>>} map
 */
export const transform = (map) => {
  return Object.entries(map).reduce((acc, [value, letters]) => {
    letters.forEach((letter) => {
      acc[letter.toLowerCase()] = Number(value);
    });
    return acc;
  }, {});
};
