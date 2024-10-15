const prompt = require("prompt-sync")({ sigint: true });

let month = prompt("Enter the month: ").toLowerCase();


if(month === 'jan' || month== 'february' || month=== 'march'){console.log('rainy')}

    else if(month === 'apr' || month === 'may' || month === 'jun'){console.log('summer')}

    else if(month === 'jul' || month === 'aug' || month === 'sep'){console.log('winter')}

    else if(month === 'oct' || month === 'nov' || month === 'dec'){console.log('autumn')}