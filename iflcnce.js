const prompt = require("prompt-sync")({sigint:true});

let age = prompt ("enter your age=")


if (isNaN(age)){
    console.log("wrong input")}
else if(age >= 18){console.log('your eligible for licence')}
else if(age < 18){console.log('your not eligible for licence')}
else if(age < 0){console.log('wrong input')}