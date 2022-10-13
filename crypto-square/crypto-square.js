export class Crypto {
  constructor(message) {
    let normalized = this.normalize(message);
    let msgLength = normalized.length;
    let rows = Math.floor(Math.sqrt(msgLength));
    let cols = Math.ceil(msgLength / rows);
    if (cols - rows > 1) {
      rows++;
      cols = rows;
    }
    let table = [];
    let substringStart = 0;
    for (let i = 0; i < rows; i++) {
      table.push(normalized.slice(substringStart, substringStart + cols));
      substringStart += cols;
    }

    let encodedTable = [];
    for (let col = 0; col < cols; col++) {
      let colString = "";
      for (let row = 0; row < rows; row++) {
        colString += table[row][col] || " ";
      }
      encodedTable.push(colString);
    }
    this.encoded = encodedTable.join(" ");
  }

  normalize(message) {
    return message.toLowerCase().replace(/\W+/g, "");
  }

  get ciphertext() {
    return this.encoded;
  }
}
