/*
 - It's time to "Guess the number"!!
 - The code certainly works.... but it breaks the DRY Principle 🤢
 - Refactor the code to follow the DRY Principle. Let's GO!
*/

const secretNum = 7;
let remainingGuesses = 3;

// NOT DRY
const playGuessingGame = () => {
  while(remainingGuesses > 0) {
    let guess = prompt("Enter a number between 1-10: ");
    guess = guess * 1;
    if (guess !== secretNum && remainingGuesses > 1) {
      remainingGuesses--;
      guess > secretNum 
        ? alert(`Too high! Remaining guesses: ${remainingGuesses}`) 
        : alert(`Too low! Remaining guesses: ${remainingGuesses}`)
    } else if (guess === secretNum) {
      alert("You WON!");
      break;
    } else {
      alert(`You lost the game, the number was: ${secretNum}`);
      break;
    }
  };
}

playGuessingGame();