const Matrix = require("./Matrix"); // Adjust the path if needed

class EmployeeMatrix extends Matrix {
  constructor(numRows, numColumns) {
    super(numRows, numColumns); // call parent constructor
  }

  loadData(salaryData) {
    this.matrix = salaryData.map((obj) => Object.values(obj));
  }
  getEmployees(department) {
    const arr = [];
    for (let r = 0; r < this.matrix.length; r++) {
      if (this.matrix[r][2] === department) {
        arr.push(this.matrix[r][1]);
      }
    }
    return arr;
  }
  getTotalSalary(department) {
    let sum = 0;
    for (let r = 0; r < this.matrix.length; r++) {
      if (this.matrix[r][2] === department) {
        sum += this.matrix[r][3];
      }
    }
    return sum;
  }

  // You can now add methods specific to employees
}

let data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 },
];

let m = new EmployeeMatrix();

m.loadData(data);
m.print();
//prints

// e10021  Gillian Finance 2000
// e10725  Tibor   Design  1200
// e10041  Anisha  Finance 2300
// e10411  Jakub   Design  1600
// e11995  Mar     Design  1300
// e10732  Nisha   Design  1200

console.log(m.getEmployees("Finance")); //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")); //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]


console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300

/* Do not remove the exports below */
module.exports = EmployeeMatrix;
