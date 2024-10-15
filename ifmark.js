// let num = 100;

// if (num >100){ console.log('TOTAL MARK IS OUT OF 100')}
// else if(num >=90){console.log('A grade')}
// else if(num >= 60 ){console.log('B grade')}
// else if(num >= 40){console.log('C grade')}
// else if(num >=20){console.log('D grade')}
// else if(num >=1){console.log('FAILED')}
// else {console.log('ERROR')}

const prompt = require("prompt-sync")({sigint:true});

let mark = prompt ("enter the marks")
if (isNaN(mark)){
    console.log("wrong input")
}else if(mark >= 80 && mark <=100){
    console.log("A grade");
}else if(mark >= 60 && mark <=79){
    console.log("b grade");
}else if(mark >= 40 && mark <=59){
    console.log("c grade");
}else if(mark >= 30 && mark <=39){
    console.log("d grade");
}else if(mark >= 0 && mark <30){
    console.log("Sorry you are failed");
}else if(mark < 0 || mark >100){
    console.log("Oops! you are a fool");
}



