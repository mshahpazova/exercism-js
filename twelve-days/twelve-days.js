//@ts-check

const DAYS = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
];
const PRESENTS = [
  "a Partridge in a Pear Tree",
  "two Turtle Doves",
  "three French Hens",
  "four Calling Birds",
  "five Gold Rings",
  "six Geese-a-Laying",
  "seven Swans-a-Swimming",
  "eight Maids-a-Milking",
  "nine Ladies Dancing",
  "ten Lords-a-Leaping",
  "eleven Pipers Piping",
  "twelve Drummers Drumming",
];

/**
 *
 * @param {number} startDay
 * @param {number} endDay
 * @returns
 */
export const recite = (startDay, endDay) => {
  let result = [];
  let presents = "";
  for (let i = 0; i < 12; i++) {
    if (i === 0) {
      presents += PRESENTS[i];
    }
    if (i === 1) {
      presents = PRESENTS[i] + ", and " + presents;
    }
    if (i > 1) {
      presents = PRESENTS[i] + ", " + presents;
    }
    result.push(
      `On the ${DAYS[i]} day of Christmas my true love gave to me: ${presents}.`
    );
  }
  if (endDay === undefined) {
    return result.slice(startDay - 1, startDay)[0] + "\n";
  } else {
    return result.slice(startDay - 1, endDay).join("\n\n") + "\n";
  }
};
