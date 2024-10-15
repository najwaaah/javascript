const prompt = require("prompt-sync")({ sigint: true });

let week = parseInt(prompt("Enter the week number (1-7): "));

if (week ==1)
     {
        console.log("Sunday")
    }
      
else if(week==2)
       {
         console.log("Monday")
        }
        
    else if(week==3)
       {
         console.log("Tuesday")
       }
       else if(week==4) 
         {
            console.log('wednesday')
        }
        else if(week==5)
            {
                console.log('thursday')
            }
  else if(week==6)
{
    console.log('friday')
}
else if(week==7)
    {
        console.log('saturday')
    }
else{console.log('invalid week number!')}