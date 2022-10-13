const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export class ResistorColorTrio {
  /**
   *
   * @param {string[]} colors
   */
  constructor(colors) {
    this.colors = colors;
    [this.color1, this.color2, this.color3] = colors;
  }

  get label() {
    if (
      !COLORS.includes(this.color1) ||
      !COLORS.includes(this.color2) ||
      !COLORS.includes(this.color3)
    ) {
      throw new Error(/invalid color/);
    }
    let result = `${COLORS.indexOf(this.color1)}${COLORS.indexOf(this.color2)}`;
    let zeros = 0;
    if (COLORS.indexOf(this.color3) >= 2) {
      zeros = COLORS.indexOf(this.color3);
      result += "0".repeat(zeros);

      result = result.substring(0, result.length - 3);
      return `Resistor value: ${result} kiloohms`;
    } else {
      result += "0".repeat(COLORS.indexOf(this.color3));
    }
    return `Resistor value: ${result} ohms`;
  }
}
