//Number Guessing Game
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guessedNumber = 0;
console.log("----------Guessing Game------------");
console.log("Guess a Number Between 1 and 100");
while (randomNumber != guessedNumber) {
    const answer = await inquirer.prompt([
        {
            name: "guessedNumber",
            message: "Guess  number",
            type: "number",
        }
    ]);
    if (randomNumber > answer.guessedNumber) {
        console.log("Too low");
    }
    else if (randomNumber < answer.guessedNumber) {
        console.log("Too high");
    }
    else {
        console.log("You got it!");
        break;
    }
}
