export class HighScores {
  /**
   *
   * @param {number[]} scores
   */
  constructor(scores) {
    this.scoreArray = scores;
  }

  get scores() {
    return this.scoreArray;
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    return Math.max(...this.scores);
  }

  get personalTopThree() {
    let sorted = [...this.scores].sort((a, b) => b - a);
    return sorted.slice(0, 3);
  }
}
