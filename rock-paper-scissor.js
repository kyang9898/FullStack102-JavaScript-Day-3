const hands = ['rock' , 'paper', 'scissor']; //array that consists of rock, paper, and scissor

function getHand() { //Gethand returns a random hand of rock, paper or scissor
    var randomNumber = parseInt(Math.random()*10)%3; //gets random hand 
    return hands[randomNumber]; //returns hands with random number which is r, p, or s 
}

let handOne = {name: "Cat" , getHand: function() { return getHand(); }}; // This is an objeect that defines two properties, name and gethand
let handTwo = {name: "Dog" , getHand: function() { return getHand(); }}; // This is an objeect that defines two properties, name and gethand
let handOneWin = 0; // variable that is a number
let handTwoWin = 0; // variable that is a number
let totalGameCount = 0; // variable that is a number

function playRound(handOne, handTwo){ //play a round of rock, paper, scissor
    var handOneChoice = handOne.getHand(); // first hand choice
    var handTwoChoice = handTwo.getHand();// second hand choice

    console.log(handOne.name + " played " + handOneChoice); //logs name of player1 and what they played
    console.log(handTwo.name + " played " + handTwoChoice); //logs name of player and what they played

    if(handOneChoice == handTwoChoice){ //If hands one and hands two are equal, it comes out as a tie. 
        totalGameCount +=1; // adding an increment of one to total games
        console.log(totalGameCount + ". "  + "It is a tie");
    }
    else if (handOneChoice == "rock"){
        if (handTwoChoice == "paper") {
            handTwoWin +=1; 
            totalGameCount +=1;
            console.log(totalGameCount + ". " + handTwo.name + " wins game ");
        }  
        if (handTwoChoice == "scissor") {
            handOneWin +=1;
            totalGameCount +=1;
            console.log(totalGameCount + ". " + handOne.name + " wins game");
        } 

    } else if (handOneChoice == "scissor"){
        if (handTwoChoice == "paper") {
            handOneWin +=1;
            totalGameCount +=1;
            console.log(totalGameCount + ". " + handOne.name + " wins game ");
        }  
        if (handTwoChoice == "rock") {
            handTwoWin +=1;
            totalGameCount +=1;
            console.log(totalGameCount + ". "  + handTwo.name + " wins game ");
        } 

    } else if (handOneChoice == "paper"){
        if (handTwoChoice == "scissor") {
            handTwoWin +=1;
            totalGameCount +=1;
            console.log(totalGameCount + ". "  + handTwo.name + " wins game ");
        }  
        if (handTwoChoice == "rock") {
            handOneWin +=1;
            totalGameCount +=1;
            console.log(totalGameCount + ". " + handOne.name + " wins game ");
        } 
    } else {
        console.log("ERROR");
    }
}
function playGame(handOne , handTwo , playUntil){ // keep playing until one player = playUntil
    if(handOneWin < playUntil && handTwoWin < playUntil) { // handOne and handTwo must be less than playUntil in order to play another round
        playRound(handOne, handTwo); //rock , paper , scissor
        playGame(handOne , handTwo , playUntil); // repeat 
    }
}
function result(){ //result of the round
    playGame(handOne , handTwo , 5); //play until one hand has won 5 times
    if (handOneWin > handTwoWin) { 
        console.log(handOne.name + "wins game of " + handOneWin + " out of " + totalGameCount); 
    } else if (handOneWin < handTwoWin) {
        console.log(handTwo.name + "wins game of " + handTwoWin + " out of " + totalGameCount);
    } else 
    {
        console.log("tie game"); //there should never be a tie game, but can have tie rounds. 
    }
}

result(); //plays and prints results of the games played.