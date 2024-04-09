// Rows and Columns
let row = 4;
let col = 4;

// Array Values
let arr1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 0, 11, 12],
    [13, 14, 15, -1]
];

let min = arr1[0][0];
let max = arr1[0][0];

// Min - Max Operation
for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        if (arr1[i][j] < min) {
            min = arr1[i][j];
        }
        if (arr1[i][j] > max) {
            max = arr1[i][j];
        }
    }
}

// Result
console.log("\nMinimum:");
console.log(min);

console.log("\nMaximum:");
console.log(max);
