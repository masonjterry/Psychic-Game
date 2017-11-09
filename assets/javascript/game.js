// Letter array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
     "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];

// Initial wins
var wins = 0;

// Initial losses
var losses = 0;

// Initial guesses left
var guessesLeft = 10;

// Initial guesses picked array
var userGuesses = [];

// userGuess declaration
var userGuess;

// startKey declaration
var startKey;

// Random letter picker
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Random letter: " + randomLetter);

// Press "Enter"
document.onkeypress = function(event) {
    startKey = event.key;

// If "Enter" is pressed, game starts
    if (startKey === "Enter") {

    console.log("Start key: " + startKey);
    document.getElementById("start").textContent = "Start guessing!";
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("guesses").textContent = guessesLeft;
    document.getElementById("pickedLetters").textContent = userGuesses;

// Takes the user input
        document.onkeypress = function(event) {
            userGuess = event.key;
            userGuesses.push(userGuess);
            guessesLeft--;
            document.getElementById("guesses").textContent = guessesLeft;

// Puts userGuesses on the console
            for (i = 0; i < userGuesses.length; i++) {
                document.getElementById("pickedLetters").textContent = userGuesses;
            }

// If userGuess matches randomLetter win goes up 1 else loss goes up 1
            
            if (userGuess === randomLetter) {
                wins++;
                guessesLeft = 10;
                userGuesses = [];
                document.getElementById("pickedLetters").textContent = userGuesses;
                document.getElementById("wins").textContent = wins;
                document.getElementById("guesses").textContent = guessesLeft;
                randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                console.log("Random Letter: " + randomLetter);
            } else if (guessesLeft === 0) {
                losses++;
                guessesLeft = 10;
                userGuesses = [];
                document.getElementById("pickedLetters").textContent = userGuesses;
                document.getElementById("losses").textContent = losses;
                document.getElementById("guesses").textContent = guessesLeft;
                randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                console.log("Random Letter: " + randomLetter);
            }

// If losses = 3 or wins = 3 end game. Asks use to press 'space' to play again
            if (losses === 3 || wins === 3) {
                document.getElementById("start").textContent = "Game over. Press 'Space Bar' to play again!";
                document.onkeypress = function(event) {
                    var restartKey = event.key;
                    if (restartKey === " ") {
                        location.reload();
                    }
                }
            }
        }
    }
}