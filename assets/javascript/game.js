
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0
var losses = 0
var guessesLeft = 9

var computerGuess = getCompGuess()

function getCompGuess() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}




// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    if (computerChoices.indexOf(userGuess) >= 0) {

        var userText = document.getElementById("guessesSoFar");
        var winsText = document.getElementById("wins");

        userText.textContent += userGuess

        // some repeated code here and in the if statement below that i could put into a function
        if (userGuess == computerGuess) {
            wins += 1
            winsText.textContent = wins
            resetVars()
        } else {
            guessesLeft -= 1
        }

        // repeated code
        if (guessesLeft == 0) {
            losses += 1
            resetVars()
        }

        var lossesText = document.getElementById("losses");
        var guessesLeftText = document.getElementById("guessesLeft");
        guessesLeftText.textContent = guessesLeft

        lossesText.textContent = losses

        function resetVars() {
            computerGuess = getCompGuess()
            userText.textContent = ""
            guessesLeft = 9
        }
    }
}