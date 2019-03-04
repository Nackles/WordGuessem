window.onload = function () {
    //creating variables (some redundant)
    var answerList = ["oxygen", "javascript", "pepper", "tangerine"];
    var playerWins = 0;

    //I thought this was broken before I realized I was trying to get an by giving it a class. 8)
    document.getElementById("#playerWin").innerHTML = playerWins;
    var playerLosses = 0;
    var guessAmount = 9;
    correctLetters = 0;
    guessLetters = [];
    var gameOver = false;
    answer = [];//please computer, just accept that this is a string so you can compare it

    //choosing computerGuess
    computerGuess = answerList[Math.floor(Math.random() * answerList.length)]; //randomly selecting the answer from answerList
    console.log("computerGuess: " + computerGuess);//did it work(yes)

    //needs to be below computerGuess
    underScoreArray = []; //array of _ to push to the html
    underScoreAmount = computerGuess.length; //how many _ goes in

    //creating an array with _ equal to computerGuess
    for (u = underScoreAmount; u > 0; u--) {
        underScoreArray.push("_");
    }

    //waiting for keypress to check playerGuess against answer
    document.onkeyup = function (event) {

        playerGuess = event.key;  //variable gets keypress  
        answer = computerGuess.split("");//converts computerGuess into searchable array

        firstLocation = computerGuess.indexOf(playerGuess); //checks if playerGuess is located in answer array and saves the first location
        console.log("firstLocation: " + firstLocation); //did it save the correct location?



        //checking if the letter exists in the array, pushes guesses to guessLetters array, changes underScoreArray to match correctly guessed letters
        if (firstLocation >= 0) {
            for (var i = 0; i < answer.length; i++) {
                if (answer[i] === playerGuess) {
                    underScoreArray[i] = playerGuess;
                    guessLetters.push(playerGuess);
                    correctLetters++;
                }

            }
        }
        else {
            guessAmount--;
            guessLetters.push(playerGuess);
        }

        //I could have used .join to compare the arrays! That was a two hour problem I ended up using the following workaround for. Thanks to Anthony.

        //checking for wins or losses
        if (correctLetters === computerGuess.length) {
            console.log("You won!");
            playerWins++;

            // document.getElementById("#playerWin") = "You won!!!";
            //reset function/reset functionally occurs here
        } else if (guessAmount < 1) {
            gameOver = true;
            console.log("You lost!");
            //reset function/reset functionally copies here
        }

        //searches array for playerGuess and does something for each instance
        // answer.forEach(function (item, index, underScoreArray) {
        //     if (item === playerGuess) {
        //         underScoreArray.splice(index, 1, playerGuess);
        //     }
        //     else {
        //         guessAmount--;
        //     }
        // })

    }//this should attach to onkeyup
}//this should attach to onload



    //I'm trying to make this replace underScoreArray[i] with the current playerGuess each loop so I can change the html later but it's not working right
    //ive made it fill underScoreArray with playerGuess so far but I'm not sure how to make only replace the position where underScoreArray
    // for (var i = 0; i < answer.length; i++) {
    //     if (answer[i] = playerGuess) {
    //         answer[i] = playerGuess;
    //         console.log("replace");
    //     } else {
    //         console.log("but it got to the else statement");
    //     }
    // }








    //array that counts how many letters in the answer array match playerGuess
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //i spent about two hours researching why this function was bugging at the playerGuess in the if statement when I realized I was telling countInArray(answer, playerGuess) here (at its definition) rather than up in the if (answer includes playerguess) statement 8)


    //this is code that was originally going to count the amount of times playerGuess appeared in the array and then looped through that many times to replace an _ with playerGuess. turns out I just wrote something better put into the answer.includes(playerGuess) if statement


    // function countInArray() {
    //     for (var p = 0; p < answerlength; p++) {
    //         // thisGuess = playerGuess;
    //         if (answer[p] = playerGuess) {
    //             underScoreArray.splice(answer[this.p], 1, playerGuess);

    //         } else {
    //             console.log("count" + count);

    //         }
    //     }
    //     return count;
    // }