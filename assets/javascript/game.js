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
var win = guessingWord;
var letters = guessingWord.split('');
var output = "";
var userLetter = "";
var letterUsed = [];
var correctLetter = 0;





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


// // var userChoiceText = document.getElementById("current-word");
// var winsText = document.getElementById("total-wins");
// var computerChoice = document.getElementById("current-word");
// var guessText = document.getElementById("remaining-guesses");
// var chosenText = document.getElementById("letters-chosen");


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
                console.log(c)
                console.log(userLetter)
                console.log(guessingWord[c])
                if(userLetter.toLowerCase() === guessingWord[c].toLowerCase()) {
                    letterMatch = true;
                    display[c] = userLetter.toLowerCase();
                    win++;}
            
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
    

    if(win > 1)
    {
        alert("Champions of Europe");
    }
    else if (guessesLeft < 1){
        alert("Off to Europa League")
    }
    else {
        document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    }


}


