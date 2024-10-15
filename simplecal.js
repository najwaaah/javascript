// const prompt = require("prompt-sync")({ sigint: true });

// const num1 = parsint (prompt("enter a number:"))

// const num2 = parsint ( prompt("enter another number:"))

// const operator = prompt (prompt(`choose an operator + - x / =>`))

// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         console.log(`${num1} + ${num2} = ${result}`)
//         break;
//     case "-":
//         result = num1 - num2;
//         console.log(`${num1} - ${num2} = ${result}`)
//         break;
//     case "x":
//         result = num1 * num2
//         console.log(`${num1} * ${num2} = ${result}`)
//         break;
//     case "/":
//         result = num1 / num2
//         console.log(`${num1} / ${num2} = ${result}`)
//         break;
      
// }


const prompt = require("prompt-sync")({ sigint: true });

const num1 = parseFloat(prompt("Enter a number: "));
const num2 = parseFloat(prompt("Enter another number: "));

const operator = prompt("Choose an operator (+, -, x, /): ");
let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;
    case "-":
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    case "x":
        result = num1 * num2;
        console.log(`${num1} x ${num2} = ${result}`);
        break;
    case "/":
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${result}`);
        } else {
            console.log("Error: Division by zero");
        }
        break;
    default:
        console.log("Invalid input");
        break;
}
