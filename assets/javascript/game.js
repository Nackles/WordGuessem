window.onload = function () {
    //creating variables (some redundant)
    var answerList = ["oxygen", "javascript", "pepper", "tangerine"];


    var playerWin = 0;
    var playerLoss = 0;
    var underScoreArray = [];
    var guessAmount = 9;
    var guessLetters = [];
    var gameOver = false;
    var answer = [];//please computer, just accept that this is a string so you can compare it

    //choosing computerGuess
    var computerGuess = answerList[Math.floor(Math.random() * answerList.length)]; //randomly selecting the answer from answerList
    console.log("computerGuess: " + computerGuess);//did it work

    //needs to be below computerGuess
    var underScoreArray = []; //array of _ to push to the html
    var underScoreAmount = computerGuess.length; //how many _ goes in

    //creating an array with _ equal to computerGuess
    for (u = underScoreAmount; u > 0; u--) {
        underScoreArray.push("_");
    }

    //waiting for keypress to check playerGuess against answer
    document.onkeyup = function (event) {

        var playerGuess = event.key;  //variable gets keypress  
        answer = computerGuess.split("");//converts computerGuess into searchable array

        var firstLocation = answer.indexOf(playerGuess); //checks if playerGuess is located in answer array and saves the first location
        console.log("firstLocation: " + firstLocation); //did it save the correct location?



        //the first pass is ALWAYS successful. why does it fail
        if (firstLocation >= 0) {
            for (var i = 0; i < answer.length; i++) {
                if (answer[i] === playerGuess) {
                    underScoreArray[i] = playerGuess;
                    guessLetters.push(playerGuess);
                }

            }
        } else {
            guessAmount--;
            guessLetters.push(playerGuess);
        }


        //the console is showing that these two arrays ARE ===, but it's not reaching the "You won!" for some reason.
        console.log("answer: " + answer);
        console.log("underscoreArray: " + underScoreArray);

        //forcing a way to check if the strings are the same because (underScoreArray === answer) wasn't making it past the if statement
        arrayPlayer = underScoreArray.toString();

        // var arrayComputer = computerGuess.toString();

        //this is just to test and see if you can reach a win state. currently: no.
        if (underScoreArray = answer) {
            console.log("You won!");
            // document.getElementById("#playerWin") = "You won!!!";
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

        console.log("guessLetters: " + guessLetters);
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