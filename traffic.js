const prompt = require('prompt-sync')({ sigint: true });
const colour = (prompt("Enter a colour: "));

switch(colour){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("warning");
        break;
    case "green":
        console.log("go");
        break;

 
}