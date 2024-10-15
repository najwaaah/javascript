const prompt = require("prompt-sync")({sigint:true});

let number = prompt ("enter the number=")



if (isNaN(number)){
    console.log("its not a number")}
else if (number %2 == 0){
    console.log('its even number')
} 
else{
    console.log('its odd number')
}                                                                                                                                                                                            