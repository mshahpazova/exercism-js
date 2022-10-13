//@ts-check

const COMMANDS = ["wink", "double blink", "close your eyes", "jump"];

/**
 *
 * @param {number} number
 * @returns {array}
 */
export const commands = (number) => {
  let result = COMMANDS.filter((c, i) => number & (1 << i));
  if (number & (1 << 4)) {
    return result.reverse();
  }
  return result;
};
