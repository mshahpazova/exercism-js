export class QueenAttack {
  constructor(coords) {
    coords = coords || {};
    coords.white = coords.white || [7, 3];
    coords.black = coords.black || [0, 3];

    if (this.notOnBoard(coords.white)) {
      throw new Error("Queen must be placed on the board");
    }
    if (this.notOnBoard(coords.black)) {
      throw new Error("Queen must be placed on the board");
    }

    if (
      coords.white[0] === coords.black[0] &&
      coords.white[1] === coords.black[1]
    ) {
      throw new Error("Queens cannot share the same space");
    }
    this.coords = coords;
  }

  get white() {
    return this.coords.white;
  }

  get black() {
    return this.coords.black;
  }

  toString() {
    let board = [];
    for (let row = 0; row < 8; row++) {
      let row = [];
      for (let col = 0; col < 8; col++) {
        row.push("_");
      }
      board.push(row);
    }
    board[this.coords.white[0]][this.coords.white[1]] = "W";
    board[this.coords.black[0]][this.coords.black[1]] = "B";
    return board.map((row) => row.join(" ")).join("\n");
  }

  notOnBoard(queen) {
    return queen[0] < 0 || queen[0] > 7 || queen[1] < 0 || queen[1] > 7;
  }

  get canAttack() {
    let { white, black } = this.coords;

    if (white[0] === black[0] || white[1] === black[1]) {
      return true;
    }

    if (Math.abs(white[0] - black[0]) === Math.abs(white[1] - black[1])) {
      return true;
    }
    return false;
  }
}
