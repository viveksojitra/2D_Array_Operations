// Rows and Columns
let row = 4;
let col = 4;

// Array Values
let arr1 = [
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2],
    [2, 2, 2, 2]
];

let sum = 0;

// Sum Operation
for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        if ((i == 0 || i == row - 1) || (j == 0 || j == col - 1)) {
            sum += arr1[i][j];
        }
    }
}

// Result
console.log("\nThe Sum of Boundary Elements:");
console.log(sum);