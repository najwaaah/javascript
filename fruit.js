const prompt = require('prompt-sync')({ sigint: true });
const fruit = (prompt("Enter a fruit: "));

switch(fruit){
    case "orange":
        console.log("120/kg");
        break;
    case "grapes":
        console.log("120/kg");
        break;
    case "watermelon":
        console.log("150/kg");
        break;
    case "mango":
        console.log("100/kg");
        break; 
     case "apple":
            console.log("150/kg");
            break; 
     default:
        console.log("wrong input!")       
}






