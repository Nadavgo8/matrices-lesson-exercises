class Matrix {
  constructor(numRows, numColumns) {
    this.matrix = this.generateMatrix(numRows, numColumns);
  }

  generateMatrix(numRows, numColumns) {
    let matrix = [];
    let num = 1;
    for (let r = 0; r < numRows; r++) {
      matrix.push([]);
      for (let c = 0; c < numColumns; c++) {
        matrix[r].push(num++);
      }
    }
    return matrix;
  }
  print() {
    for (let i = 0; i < this.matrix.length; i++) {
      let line = "";
      for (let j = 0; j < this.matrix[i].length; j++) {
        line += this.matrix[i][j] + "\t";
      }
      console.log(line);
    }
  }
  printRow(row) {
    for (let i = 0; i < this.matrix[row].length; i++) {
      console.log(this.matrix[row][i]);
    }
  }

  printColumn(col) {
    for (let i = 0; i < this.matrix.length; i++) {
      console.log(this.matrix[i][col]);
    }
  }
  alter(row, col, num) {
    this.matrix[row][col] = num;
  }
  get(row, col) {
    return this.matrix[row][col];
  }
  findCoordinate(num) {
    for (let r = 0; r < this.matrix.length; r++) {
      for (let c = 0; c < this.matrix[r].length; c++) {
        if (this.matrix[r][c] === num) {
          return { x: c, y: r };
        }
      }
    }
    return { x: -1, y: -1 };
  }
}

let m = new Matrix(3, 4);
m.print();
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/

m.alter(0, 0, m.get(1, 1));
m.printColumn(0); //prints 6, 5, 9 (separate lines)
m.printRow(0); //prints 6, 2, 3, 4 (separate lines)
console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}
module.exports = Matrix;
