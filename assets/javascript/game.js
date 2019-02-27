// Variable:
// Array
var teams = [
    "Liverpool",
    "RealMadrid",
    "Barcelona",
    "Juventus",
    "ManchesterCity",
    "PSG",
    "Dortmund",
    "ASRoma",
    "Tottenham",
    "Ajax",
    "Napoli",
    "Milan",
    "Lyon" 
    ];
var randomTeams = Math.floor(Math.random()*teams.length);
var guessesLeft = 12;
var guessingWord = teams[randomTeams];
var guessedLetters = guessingWord.length;
var display = [guessedLetters];
var win = 0;
var letters = guessingWord.split('');
var output = "";
var userLetter = "";
var letterUsed = [];
var correctLetter = 0;
var userWins = 0;

console.log(teams.length);
console.log(teams[0]);
console.log(teams[11]);
console.log(teams[12]);


// Functions
//  Randomly chooses a team name from array.
var startUp = function() {
    
    for (var i= 0; i < guessingWord.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("current-word").innerHTML = output;
    document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    output = "";
    document.getElementById("total-wins").innerHTML = "Wins: " + userWins;

}

var startUpReset = function() {
    teams = [
        "Liverpool",
        "RealMadrid",
        "Barcelona",
        "Juventus",
        "ManchesterCity",
        "PSG",
        "Dortmund",
        "ASRoma",
        "Tottenham",
        "Ajax",
        "Napoli",
        "Milan",
        "Lyon" 
        ];
    randomTeams = Math.floor(Math.random()*teams.length);
    guessesLeft = 12;
    guessingWord = teams[randomTeams];
    guessedLetters = guessingWord.length;
    display = [guessedLetters];
    win = 0;
    letters = guessingWord.split('');
    output = "";
    userLetter = "";
    letterUsed = [];
    correctLetter = 0;
    
    for (var i= 0; i < guessingWord.length; i++) {
        display[i] = "_ ";
        output = output + display[i];

    }
    document.getElementById("current-word").innerHTML = output;
    document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    output = "";
    document.getElementById("total-wins").innerHTML = "Wins: " + userWins;

}

window.onload = function() {
    startUp();
}
  
document.onkeyup = function(event){

    output = "";
    var keyCode = event.keyCode;
    var userLetter = event.key;
    var letterMatch = false;
   
    if (letterUsed.indexOf(userLetter) === -1) {
        letterUsed.push(userLetter);
        for (var c = 0; c < guessingWord.length; c++){
            if(keyCode >= 65 && keyCode <= 90) {
                if(userLetter.toLowerCase() === guessingWord[c].toLowerCase()) {
                    letterMatch = true;
                    display[c] = userLetter.toUpperCase();
                    win++;
                    console.log("win", win) 
                }
                    
            }
            output = output + display[c] + " ";
            document.getElementById("lettersChosen").innerHTML = letterUsed.join(", ");
        }
        if(!letterMatch){
            guessesLeft--;
        } 
    }

    document.getElementById("current-word").innerHTML = output;
    output = "";
    
    console.log(win, guessingWord.length)
    if(win === guessingWord.length)
    {
        ++userWins;
        alert("Champions of Europe");
        startUpReset()
       
    }
    else if (guessesLeft < 1){
        alert("Off to Europa League");
        startUpReset();
        
    }
    else {
        document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    }
}


