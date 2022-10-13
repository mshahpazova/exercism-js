//@ts-check

const DICE_VALUES = {
  ones: 1,
  twos: 2,
  threes: 3,
  fours: 4,
  fives: 5,
  sixes: 6,
};
/**
 *
 * @param {number[]} dices
 * @param {string} category
 * @returns {number}
 */
export const score = (dices, category) => {
  let occ = {};
  const countCards = (deck) => {
    return deck.reduce(
      (acc, card) => ((acc[card] = (acc[card] ?? 0) + 1), acc),
      {}
    );
  };

  if (Object.keys(DICE_VALUES).includes(category)) {
    let diceValue = DICE_VALUES[category];
    return dices.filter((dice) => dice === diceValue).length * diceValue;
  }
  switch (category) {
    case "yacht":
      return dices.filter((dice) => dice === 5).length === dices.length
        ? 50
        : 0;
    case "little straight":
      return dices.sort().join("") === "12345" ? 30 : 0;
    case "big straight":
      return dices.sort().join("") === "23456" ? 30 : 0;
    case "choice":
      return dices.reduce((acc, dice) => acc + dice, 0);
    case "four of a kind":
      let occ1 = Object.entries(countCards(dices)).sort((a, b) => b[1] - a[1]);
      let [dice, count] = occ1[0];
      if (count >= 4) {
        return Number(dice) * 4;
      }
      return 0;
    case "full house":
      let occ2 = Object.entries(countCards(dices)).sort((a, b) => a[1] - b[1]);
      if (occ2.map((entry) => entry[1]).join("") === "23") {
        let [two, three] = occ2.map((entry) => Number(entry[0]));
        return two > three ? 19 : 16;
      }
      return 0;
  }
};
