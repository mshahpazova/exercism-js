//@ts-check

class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }

  /**
   *
   * @param {string[]} words
   * @returns {Record<string, any>}
   */
  find(words) {
    return words.reduce((acc, el) => ({ ...acc, ...this.findWord(el) }), {});
  }

  /**
   *
   * @param {string} word
   * @returns {Record<string, any>}
   */
  findWord(word) {
    const coordinates = [
      [-1, -1],
      [0, -1],
      [1, -1],
      [-1, 0],
      [1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
    ];

    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[0].length; col++) {
        let count = 0;
        if (this.grid[row][col] === word[count]) {
          count++;
          for (let [colOffset, rowOffset] of coordinates) {
            while (
              this.grid[row + rowOffset * count]?.[col + colOffset * count] ===
              word[count]
            ) {
              if (count === word.length - 1) {
                return {
                  [word]: {
                    start: [row + 1, col + 1],
                    end: [
                      row + rowOffset * count + 1,
                      col + colOffset * count + 1,
                    ],
                  },
                };
              }
              count++;
            }
          }
        }
      }
    }
    return { word: undefined };
  }
}

export default WordSearch;
