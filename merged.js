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

let arrMerge = [];

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

// Merging Process
arrMerge = arr1.concat(arr2);

// Result
console.log("\nMerged Array:");
console.log(arrMerge);