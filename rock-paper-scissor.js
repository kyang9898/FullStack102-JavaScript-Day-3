const hands = ['rock' , 'paper', 'scissor'];

function getHand() {
    var randomNumber = parseInt(Math.random()*10)%3; //gets random number 
    // console.log(hands[randomNumber]);
    return hands[randomNumber]; //returns hands with random number which is r, p, or s 
}

let handOne = {name: "Cat" , getHand: function() { return getHand(); }}; // 
let handTwo = {name: "Dog" , getHand: function() { return getHand(); }}; // 
let handOneWin = 0;
let handTwoWin = 0;
let totalGameCount = 0;

function playRound(handOne, handTwo){ //play a round 
    var handOneChoice = handOne.getHand();
    var handTwoChoice = handTwo.getHand();

    console.log(handOne.name + " played " + handOneChoice); //logs name of player1 and what they played
    console.log(handTwo.name + " played " + handTwoChoice); //logs name of player and what they played

    if(handOneChoice == handTwoChoice){ //If hands one and hands two are equal, it comes out as a tie. 
        totalGameCount +=1;
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
function playGame(handOne , handTwo , playUntil){
    if(handOneWin < playUntil && handTwoWin < playUntil) {
        playRound(handOne, handTwo);
        playGame(handOne , handTwo , playUntil);
    }
}
function result(){
    playGame(handOne , handTwo , 5);
    if (handOneWin > handTwoWin) {
        console.log(handOne.name + "wins game of " + handOneWin + " out of " + totalGameCount);
    } else if (handOneWin < handTwoWin) {
        console.log(handTwo.name + "wins game of " + handTwoWin + " out of " + totalGameCount);
    } else 
    {
        console.log("tie game");
    }
}

result();