// the game is essentially going to be one big loop calls itself when it completes and waits for input to start
// the game needs to convert capitalization into lowercase

//visible variables
var playerWin = 0;
var targetWord = [""]; //Populates from answerList of answers
var guessAmount = 0;
var guessLetters = [""];


//invisible variables
var answerList = ["Oxygen"];

document.onkeyup = function(press){



    document.onkeyup





// FIRSTLOOP
// define and display intended variables and arrays:
// variable playerWin stores amount of wins
// variable guess Amount stores amount of guess
// array targetWord stores current word being guessed
// array guessLetters stores used letter answers
// THE GAME DOES NOTHING ELSE UNTIL THE PLAYER PRESSES A LETTER

//SECONDLOOP
// when player presses a key, if that key: (is located within targetWord, that letter is revealed in targetWord, that letter is added to guessLetters, and the game waits for another input) 
// ELSE (guessAmount decreases by 1, that letter is added to guessLetters, THEN CHECKS TO SEE IF THERE ARE GUESSES REMAINING, and IF (the amount of guesses is > 0, loops back to waiting for another key press) ELSE (GAME OVER screen that waits for another key press to restart the game)

// 4th and Pike walking toward westfield mall: on the left first available viulding i can enter with a lobby starbucks [CENTURY SQUARE]