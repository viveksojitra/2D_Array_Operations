// Rows and Columns
let row = 2;
let col = 2;

// First Array Values
let arr1 = [
    [2, 4],
    [6, 8]
];

// Second Array Values
let arr2 = [
    [1, 3],
    [5, 7]
];

let sum = [];

// First Array Process
console.log("First Array:");
for (let i = 0; i < row; i++) {
    console.log(arr1[i]);
}

// Second Array Process
console.log("\nSecond Array:");
for (let i = 0; i < row; i++) {
    console.log(arr2[i]);;
}

// Sum Process
for (let i = 0; i < row; i++) {
    sum[i] = [];
    for (let j = 0; j < col; j++) {
        sum[i][j] = arr1[i][j] + arr2[i][j];
    }
}

// Result
console.log("\nSum of the First and Second Array:");
for (let i = 0; i < row; i++) {
    console.log(sum[i]);
}