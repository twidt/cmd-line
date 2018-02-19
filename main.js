var game = require ("./game.js");
var wordCons = require("./words.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var randoWord = game.randoWord;
var letterGuessed;
exports.letter;

var myWord = new wordCons.wordCons(game.randoWord)
var maxGuesses = 20;

function takeAGuess() {
    console.log(myWord.toString());
    if (myWord.guessesMade.length >= maxGuesses){
        console.log("You are out of luck, bro");
        return;
    }
    inquirer.prompt([{
        name : "letter",
        type: "text",
        message: "Enter a letter homie:",
        validate: function(str){
            var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
            return regEx.test(str);
        }
    }]).then(function(letterInput){
        var letter = letterInput.letter;
        myWord.findLetter(letter);
        if(myWord.isComplete()){
            console.log("Yay, boy! It was " + myWord.toString() + "!");
            return;
        }
        console.log("------------------\n");
        console.log("You have" + maxGuesses - myWord.guessesMade.length + "guesses left.")
        takeAGuess();
    });
}
takeAGuess();