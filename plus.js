const prompt = require('prompt-sync')({ sigint: true });

let num = prompt("enter a number l :")

let factorial = 1 ;
for(let i = 1; i <= num; i++){
    factorial = factorial * i;
}
console.log('factorial of  ${num} is ${factorial}')