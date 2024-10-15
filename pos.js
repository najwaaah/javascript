const prompt = require("prompt-sync")({sigint:true});

let pos = prompt ("enter the number=")


if (isNaN(pos)){
    console.log("not a number")}
else if(pos > 0){console.log('its a positive number')}
else if(pos < 0){console.log('its a negative number')}
else if(pos==0){console.log('number may be zero')}