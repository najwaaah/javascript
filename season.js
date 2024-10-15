const prompt = require("prompt-sync")({ sigint: true });

let month = prompt("Enter the month: ").toLowerCase();

let rainy_months = ["june", "july", "august", "september"];
let winter_months = ["december", "january", "february"];
let summer_months = ["march", "april", "may"];


if (isNaN(mark)){
   console.log("wrong input")}
else if (rainy_months.includes(month))
     {
    console.log("Rainy Season");
    }
 else if (winter_months.includes(month)) 
    {
    console.log("Winter Season");
    }
 else if (summer_months.includes(month)) 
    {
    console.log("Summer Season");
    } 
else
    {
    console.log("Invalid month");
    }  





























