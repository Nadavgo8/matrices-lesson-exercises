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
}

let t = new TicTacToe(3, 4);
t.print();
t.loadBoard();
t.print();
