// Variable:
// Array
var teams = [
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
var wins = 0;
var guessesLeft = 12;
var lettersPressed = [];
var userGuess = [];
// 


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

// Functions
// starts function when key is pressed.
document.onkeyup = function(event){
    // key stroke variable.
    var userGuess = event.key;

    //  Randomly chooses a team name from array.
    var team = teams[Math.floor(Math.random()*teams.length)];

    var answerArray = [];
    for (var i= 0; i < team.length; i++) {
        answerArry[i] = "_";
    }

    var remainingLetters = team.length;

    for(var t = 0; t < team.length; t++) {
        if(team[t] === guess) {
            answerArry[t] = guess;
            remainingLetters--;
        }
    }
    // User Display

}



