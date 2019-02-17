var teams = [
    "Liverpool" ||
    "Real Madrid" ||
    "Barcelona" ||
    "Juventus" ||
    "Manchester City" ||
    "Paris Saint Germain" ||
    "Borussia Dortmund" ||
    "AS Roma" ||
    "Tottenham" ||
    "Ajax" ||
    "Napoli" ||
    "Inter Milan" ||
    "Lyon" ||
    ];

var team = teams[Math.floor(Math.random()*teams.length)];

var answerArray = [];
for (var i= 0; i < team.length; i++) {
    answerArry[i] = "_";
}

var remainingLetters = team.length;
