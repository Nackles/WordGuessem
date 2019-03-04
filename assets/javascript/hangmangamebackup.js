// the game is essentially going to be one big loop calls itself when it completes and waits for input to start
// the game should and might eventually convert capitalization into lowercase

//see bottom of code for what remains

//invisible variables
var answerList = ["oxygen", "javascript", "pepper", "tangerine"];

//visible variables
var playerWin = 0;
var playerLoss = 0;
var targetWord = []; //Populates from answerList of answers
var guessAmount = 9;
var guessLetters = [""];

//RNG to chose an answer from answerList and make computerGuess hold that string
var computerGuess = answerList[Math.floor(Math.random() * answerList.length)];
//Leave this here if you want to see what the computerGuessed in the console.
console.log(computerGuess);

document.onkeyup = function (event) {
    //takes input as guess
    var playerGuess = event.key;
    //no caps allowed, sorry, I make the rules
    playerGuess.toLowerCase;

    var underScoreArray = [];
    //subtracts one guess from guessAmount


    //Making a variable to store a number equal to computerGuess.length's worth of underscores
    var underScoreAmount = computerGuess.length;

    //populate underScoreArray with underscores = to GuessLetters.length: working
    for (u = underScoreAmount; u > 0; u--) {
        underScoreArray.push("_");
    }

    var answer = [];
    //Converts computerGuess into answer, an array of  strings that are correct guesses
    var answer = computerGuess.split("");

    //oh ok, this is why people have scope problems and I want to clarify this later, but adding this variable made the countInArray function start working - so I assume doing the same thing for playerGuess will make that work too.
    var answerlength = answer.length;

    //
    var letterAmount = countInArray();


    // countInArray() will tell us how many times to search computerGuess for playerGuess
    function countInArray(answer, playerGuess) {
        var count = 0;
        for (var p = 0; p < answerlength; p++) {
            if (answer[p] = playerGuess) {
                count++;
            }
        }
        console.log("count" + count);
        return count;
    }
    //The next bit of code compares playerGuess to the answer array and if it's within: will then reveal that letter in the targetWord span, add that letter the guessLetters array ELSE guessAmount --, add that letter to guessLetters, then lets the function RECUR [I'll have to make another loops to contain all this?)  

    if (answer.includes(playerGuess)) {
        console.log("answer includes playerGuess");
        count = countInArray();
        console.log(count);

    }
    else {
        guessAmount--;
        console.log(guessAmount);
    }





    //GAME OVER is probably just gonna be lameCoded with if guessLetters is dimished, then var gameWon = false; (also, create var playerWon = false; somewhere above the loop)

    //make a RESET function that can be called to choose a new word, repopulate guessLetters with _ equal to the guessLetters.length, reset guuessAmount,basically reset the game

    /////////////////////////////////////
    ///unused pieces of code just in case
    ////////////////////////////////////



    // DIFFERENT METHOD I STARTED BUT AM KEEPING AROUND JUST IN CASE
    // for (i = 0; i < answer.length; i++)({
    //     var a this.answer[i];
    //     if(answer = playerGuess) {
    //     }
    // })
};


//  FIRSTLOOP
//  define and display intended variables and arrays:
//  variable playerWin stores amount of wins
//  variable guess Amount stores amount of guess
//  array targetWord stores current word being guessed
//  array guessLetters stores used letter answers
//  THE GAME DOES NOTHING ELSE UNTIL THE PLAYER PRESSES A LETTER

// SECONDLOOP
//  when player presses a key, if that key: (is located within targetWord, that letter is revealed in targetWord, that letter is added to guessLetters *AT ITS INDEX.LENGTH*, and the game waits for another input) 
//   ELSE (guessAmount decreases by 1, that letter is added to guessLetters, THEN CHECKS TO SEE IF THERE ARE GUESSES REMAINING, and IF (the amount of guesses is > 0, loops back to waiting for another key press) ELSE (GAME OVER screen that waits for another key press to restart the game)

