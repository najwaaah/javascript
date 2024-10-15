const prompt = require('prompt-sync')({ sigint: true });

let num = prompt("enter a number to find factorial :")

let factorial = 1 ;
for(let i = num; i >= 1; i--){
    factorial = factorial * i;
}
console.log(`factorial of  ${num} is ${factorial}`)