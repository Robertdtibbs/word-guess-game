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
// var userWins = 0;

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
    document.getElementById("total-wins").innerHTML = "Wins: " + win;

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
                    display[c] = userLetter.toUpperCase();
                    win++;
                    console.log(win + "win") 
                }
                    
            }
            output = output + display[c] + " ";
            document.getElementById("lettersChosen").innerHTML = letterUsed.join(", ");
        }
        if(!letterMatch){
            guessesLeft--;
        } 
    }

    // if(keyCode >= 65 && keyCode <= 90) {
    //     if (letterUsed.indexOf(userLetter) === -1) {
    //         letterUsed.push(userLetter);
    //         for (var c = 0; c < guessingWord.length; c++){
           
    //             console.log(c)
    //             console.log(userLetter)
    //             console.log(guessingWord[c])
    //             if(userLetter.toLowerCase() === guessingWord[c].toLowerCase()) {
    //                 letterMatch = true;
    //                 display[c] = userLetter.toUpperCase();
    //                 win++;
    //                 console.log(win + "win") 
    //             }
                    
    //         }
    //         output = output + display[c] + " ";
    //         document.getElementById("lettersChosen").innerHTML = letterUsed.join(", ");
    //     }
    //     if(!letterMatch){
    //         guessesLeft--;
    //     } 
    // }


    document.getElementById("current-word").innerHTML = output;
    output = "";
    

    if(win.length == guessingWord.length)
    {
        alert("Champions of Europe");
        win++;
    }
    else if (guessesLeft < 1){
        alert("Off to Europa League");
    }
    else {
        document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    }
}


