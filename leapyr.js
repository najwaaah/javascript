const prompt = require("prompt-sync")({sigint:true});

let year = prompt ("enter the year=")

if((year % 4 === 0 && year % 100 !==0 || year % 400=== 0)){console.log('its a leap year')}
else{console.log('its not a leap year')}