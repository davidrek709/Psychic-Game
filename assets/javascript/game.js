
var wins;
var losses;
var userGuess;
var guessesLeft;
var winText;
var lossesText;
var remainingGuessesText;
var guessesLeft;
const computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var winsText = document.getElementById("win-text");
var lossesText = document.getElementById("losses-text");
var remainingGuessesText = document.getElementById("remaining-guesses");
var guessesMadeText = document.getElementById("guesses-made")


        if ((userGuess >= "a" && computerGuess <= "z")) {
           if (userguess === computerGuess) {
               wins++;
            } else {
                losses++;
            }
           }

        winText.textContent = wins++;
        lossesText.textContent = losses++;
        userGuess.textContent = userGuess++;
        guessesLeft.textContent = guessesLeft++;