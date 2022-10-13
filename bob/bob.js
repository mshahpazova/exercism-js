//@ts-check
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 *
 * @param {string} message
 * @returns {string}
 */
export const hey = (message) => {
  function isYelling(message) {
    return /^[A-Z]+$/.test(message.replace(/[^A-Z]/gi, ""));
  }

  if (/^\s*$/.test(message)) {
    return "Fine. Be that way!";
  }
  if (isYelling(message)) {
    if (message.endsWith("?")) {
      return "Calm down, I know what I'm doing!";
    } else {
      return "Whoa, chill out!";
    }
  }

  if (message.trim().endsWith("?")) {
    return "Sure.";
  }
  return "Whatever.";
};
