// Variable:
// Array
var europeTeams = [
    "Liverpool",
    "Real Madrid",
    "Barcelona",
    "Juventus",
    "Manchester City",
    "Paris Saint Germain",
    "Borussia Dortmund",
    "AS Roma",
    "Tottenham",
    "Ajax",
    "Napoli",
    "Inter Milan",
    "Lyon" 
    ];
// More Variables

// All console logs:
console.log(teams.length);
console.log(teams[0]);
console.log(teams[1]);
console.log(teams[2]);
console.log(teams[3]);
console.log(teams[4]);
console.log(teams[5]);
console.log(teams[8]);
console.log(teams[10]);
console.log(teams[11]);
console.log(teams[12]);


var guessesLeft = 12;

var championsLeague = {    
    guessingWord = [],
    guessedLetters = [],
    wins = 0,
    teams = europeTeams,
}

// var userChoiceText = document.getElementById("current-word");
var winsText = document.getElementById("total-wins");
var computerChoice = document.getElementById("current-word");
var guessText = document.getElementById("remaining-guesses");
var chosenText = document.getElementById("letters-chosen");

// Functions
// starts function when key is pressed.
document.onkeyup = function(event){
    // key stroke variable.
    var userGuess = event.key;

    //  Randomly chooses a team name from array.
    var randomTeam = teams[Math.floor(Math.random()*teams.length)];

    userGuess= [];
    // Sets template of blank spaces for the hangman word the user must guess.
    for (var i= 0; i < team.length; i++) {
        userGuess.push("_");
    }

    if(event.key === "A", "B", "C") {
        letterGuess(event.key.toLowerCase());
    }

    function letterGuess(letter) {
        if (userGuess.indexOf(letter) === -1) {
            userGuess.push(letter);
            evaluateLetter(letter);
        }
    }
    // functiont to search for letter in 
}

// code to push outputs to HTML
winsText.textContent = wins;
computerChoice.textContent = "";
guessText.textContent = remainingGuesses;
chosenText.textContent = "";