// randos
var wordsToGuess = ["Batman","Robin", "Nightwing", "Red Hood", "Bat Girl", "Alfred","Commissioner Gordon", "Oracle", "Red Robin", "BatWing"];
var randoIndex = Math.floor(Math.random() * wordsToGuess.length);
var randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;