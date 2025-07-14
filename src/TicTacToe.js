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
    const map = { x: 1, o: 2 };
    let winner = 1;
    for (let i = 0; i < this.matrix.length; i++) {
      if (
        this.matrix[0][i] !== "." &&
        this.matrix[0][i] === this.matrix[1][i] &&
        this.matrix[0][i] === this.matrix[2][i]
      ) {
        if (this.matrix[0][i] === "0") {
          winner = 2;
        }
        console.log(`Congratulations Player ${winner}`);
        return;
      }
    }
  }
}

let board = new TicTacToe();
board.loadBoard();

board.play(2, 2, 1);
board.play(0, 0, 2);
board.play(0, 2, 1);
board.play(1, 0, 2);
board.play(1, 2, 1); //prints Congratulations Player 1

board.print();
// //prints
// o       .       x
// o       .       x
// .       .       x
