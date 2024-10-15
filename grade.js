const prompt = require("prompt-sync")({ sigint: true });

let grade = parseFloat(prompt("Enter your grade (0-100): "));


switch (true) {
    case (grade >= 90):
        letterGrade = 'A';
        break;
    case (grade >= 80):
        letterGrade = 'B';
        break;
    case (grade >= 70):
        letterGrade = 'C';
        break;
    case (grade >= 60):
        letterGrade = 'D';
        break;
    default:
        letterGrade = 'F';
}

console.log(`Your grade is ${letterGrade}`);
