const prompt = require("prompt-sync")({ sigint: true });

let units = parseFloat(prompt("Enter the number of electricity units: "));
let billAmount = 0;

if (units <= 50) {
    billAmount = units * 0.50;
} else if (units <= 150) {
    billAmount = (50 * 0.50) + ((units - 50) * 0.75);
} else if (units <= 250) {
    billAmount = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
} else {
    billAmount = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
}


let surcharge = billAmount * 0.20;
let totalBill = billAmount + surcharge;

console.log(`The total electricity bill is Rs. ${totalBill.toFixed(2)}`);
