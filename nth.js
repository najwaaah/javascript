const prompt = require('prompt-sync')({ sigint: true });
let n = (prompt("Enter a number for which you want the sum: "));

let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("The sum of the first " + n + " integers is = " + sum);