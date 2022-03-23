const hands = ['rock' , 'paper', 'scissor'];
function getHand() {
    var randomNumber = parseInt(Math.random()*10)%3; //gets random number 
    return hands[randomNumber]; //returns hands with random number which is r, p, or s 
}
// let handOne = [{name: "Keng" , hands: getHand()}];
// let handTwo = [{name: "Yang" , hands: getHand()}];

function playRound(handOne, handTwo){ //play a round 
    // handOne.hands = handOne.hands;
    // handTwo.hands = handTwo.hands;
    // console.log("1" + handOne.hands);
    // console.log("2" + handTwo.hands);
    console.log(handOne.name + " played " + handOne.hands); //logs name of player1 and what they played
    console.log(handTwo.name + " played " + handTwo.hands); //logs name of player and what they played
    if(handOne.hands == handTwo.hands){ //If hands one and hands two are equal, it comes out as a tie. 
        console.log("It is a tie");
    }
    else if (handOne.hands == "rock"){
        if (handTwo.hands == "paper") {
            console.log(handTwo.name + " wins");
        }  
        if (handTwo.hands == "scissor") {
            console.log(handOne.name + " wins");
        } 

    } else if (handOne.hands == "scissor"){
        if (handTwo.hands == "paper") {
            console.log(handOne.name + " wins");
        }  
        if (handTwo.hands == "rock") {
            console.log(handTwo.name + " wins");
        } 

    } else if (handOne.hands == "paper"){
        if (handTwo.hands == "scissor") {
            console.log(handTwo.name + " wins");
        }  
        if (handTwo.hands == "rock") {
            console.log(handOne.name + " wins");
        } 
    } else {
        console.log("ERROR");
    }
}
function playgame(player1 , player2 , playUntil){
    
}
let handOne = {name: "Cat" , hands: getHand()};
let handTwo = {name: "Dog" , hands: getHand()};

playRound(handOne, handTwo);