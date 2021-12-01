fs = require("fs");

let numbers = fs.readFileSync("input1", {encoding: "utf8"}).split("\n").map(Number);
let inc = 0;

for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < numbers[i + 1]) {
        inc += 1;
    }
}

console.log("Answer 1:", inc);

let inc2 = 0;
for (let i = 0; i < numbers.length; i++) {
// for (let i = 0; i < 20; i++) {
    let prev = numbers.slice(Math.max(i, 0), Math.min(i + 3, numbers.length)).reduce((a, b) => a + b, 0);
    let next = numbers.slice(Math.max(i + 1, 0), Math.min(i + 4, numbers.length)).reduce((a, b) => a + b, 0);
    // console.log(i, prev, next);
    if (prev < next) {
        inc2 += 1;
    }
}

console.log("Answer 2:", inc2);