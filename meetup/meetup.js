//@ts-check

const WEEK_DAYS = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 0,
};

const FIRST_TEEN = 13;
const LAST_TEEN = 19;

/**
 *
 * @param {number} year
 * @param {number} month
 * @param {string} descriptor
 * @param {string} weekday
 */
export const meetup = (year, month, descriptor, weekday) => {
  const getDate = (start, end) => {
    let step = start < end ? 1 : -1;
    for (let i = start; i > 0 && i <= Math.max(end, start); i += step) {
      let startDate = new Date(year, month - 1, i);
      if (startDate.getMonth() !== month - 1) {
        continue;
      }
      if (startDate.getDay() === WEEK_DAYS[weekday]) {
        return startDate;
      }
    }
  };

  switch (descriptor) {
    case "teenth":
      return getDate(FIRST_TEEN, LAST_TEEN);
    case "first":
      return getDate(1, 7);
    case "second":
      return getDate(8, 14);
    case "third":
      return getDate(15, 21);
    case "fourth":
      return getDate(22, 28);
    case "last":
      return getDate(31, 22);
    default:
      return getDate(1, 31);
  }
};
