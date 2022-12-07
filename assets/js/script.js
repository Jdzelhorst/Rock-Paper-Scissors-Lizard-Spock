// Declarations of variables for DOM elements

let choiceButtons = document.getElementsByClassName('choice-button');
let gamerScore = document.getElementById('gamer-score');
let computerScore = document.getElementById('computer-score');
let gamerChoiceFont = document.getElementById('gamer-choice');
let computerChoiceFont = document.getElementById('computer-choice');
let choices = ["rock", "paper", "scissors", "lizard", "spock"];

let gameMessage = document.getElementById('game-text');
let gamerChoice;
let computerChoice;


// Event listeners to choiceButtons

for (let button of choiceButtons) {
    button.addEventListener("click", function() {
        gamerChoice = this.getAttribute("data-choice");
        playGame(gamerChoice);
    });
}

// Adding function to select the right Font with the right gamerChoice and computerChoice
// Adding the randomnumber generator for the computerChoice

function playGame(gamerChoice) {
    if (gamerChoice == "0") {
        gamerChoiceFont.className = "fa-solid fa-hand-back-fist";
    } else if (gamerChoice == "1"){
        gamerChoiceFont.className = "fa-solid fa-hand";
    } else if (gamerChoice == "2"){
        gamerChoiceFont.className = "fa-solid fa-scissors";
    } else if (gamerChoice == "3"){
        gamerChoiceFont.className = "fa-solid fa-hand-lizard";
    } else {
        gamerChoiceFont.className = "fa-solid fa-hand-spock";
    }

    computerChoice = Math.floor(Math.random() * 5);

    if (computerChoice == "0") {
        computerChoiceFont.className = "fa-solid fa-hand-back-fist";
    } else if (computerChoice == "1"){
        computerChoiceFont.className = "fa-solid fa-hand";
    } else if (computerChoice == "2"){
        computerChoiceFont.className = "fa-solid fa-scissors";
    } else if (computerChoice == "3"){
        computerChoiceFont.className = "fa-solid fa-hand-lizard";
    } else {
        computerChoiceFont.className = "fa-solid fa-hand-spock";
    }

    checkWinner();

}
// checkwinner function, by implementing all game rules. Starting increment gamer or computer score function

function checkWinner(){
    if (gamerChoice == '0' && computerChoice == '2' || computerChoice == '3') {
        gameMessage.innerHTML = "Congratulations, you won this round!";
        incrementGamerScore();
     }
     else if (gamerChoice == '0' && computerChoice == '1' || computerChoice == '4') {
        gameMessage.innerHTML = "You lost! Try again next round!";
        incrementComputerScore();
     }
     else if (gamerChoice == '1' && computerChoice == '0' || computerChoice == '4') {
        gameMessage.innerHTML = "Congratulations, you won this round!";
        incrementGamerScore();
     }     
     else if (gamerChoice == '1' && computerChoice == '2' || computerChoice == '3') {
        gameMessage.innerHTML = "You lost! Try again next round!";
        incrementComputerScore();
     }
     else if (gamerChoice == '2' && computerChoice == '1' || computerChoice == '3') {
        gameMessage.innerHTML = "Congratulations, you won this round!";
        incrementGamerScore();
     } 
     else if (gamerChoice == '2' && computerChoice == '0' || computerChoice == '4') {
        gameMessage.innerHTML = "You lost! Try again next round!";
        incrementComputerScore();
     } 
     else if (gamerChoice == '3' && computerChoice == '1' || computerChoice == '4') {
        gameMessage.innerHTML = "Congratulations, you won this round!";
        incrementGamerScore();
     }
     else if (gamerChoice == '3' && computerChoice == '0' || computerChoice == '2') {
        gameMessage.innerHTML = "You lost! Try again next round!";
        incrementComputerScore();
     } 
     else if (gamerChoice == '4' && computerChoice == '0' || computerChoice == '2') {
        gameMessage.innerHTML = "Congratulations, you won this round!";
        incrementGamerScore();
     }
     else if (gamerChoice == '4' && computerChoice == '1' || computerChoice == '3') {
        gameMessage.innerHTML = "You lost! Try again next round!";
        incrementComputerScore();
     } 
     else {
        gameMessage.innerHTML = "How exciting! It's a draw! Try again!";
     }
}

// The increment scores functions
// These functions are to declare the scores for the gamer and computer

function incrementGamerScore() {
    let oldScore = gamerScore.innerText;
    gamerScore.innerText = ++oldScore;
 }
 
 function incrementComputerScore() {
    let oldScore = computerScore.innerText;
    computerScore.innerText = ++oldScore;
 }