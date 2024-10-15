// Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// upto 50 units Rs. 0.50/unit
// upto 100 units Rs. 0.75/unit
// upto 200 units Rs. 1.20/unit
// //  above 250 Rs. 1.50/unit

const prompt = require("prompt-sync")({ sigint: true });

let unit = prompt("Enter the unit: ");

if (unit <50){
    console.log(unit * .5);
}
else if (unit <100){
    console.log(unit * .75);
}
else if (unit <200){
    console.log(unit * 1.20);
}
else if (unit >250){
    console.log(unit * 1.50);
}