const Matrix = require("./Matrix"); // Adjust the path if needed

class TicTacToe extends Matrix {
  constructor(numRows, numColumns) {
    super(numRows, numColumns); // call parent constructor
  }

  loadBoard() {
    this.matrix = [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ];
  }
  play(row, col, player) {
    let symbol = "x";
    if (player === 2) {
      symbol = "o";
    }
    this.alter(row, col, symbol);
  }
}

let board = new TicTacToe();
board.loadBoard();

board.play(2, 2, 1);
board.play(0, 0, 2);
board.print();
//prints
// o       .       .
// .       .       .
// .       .       x
