const playerScoreElement = document.querySelector("#playerScore");
const computerScoreElement = document.querySelector("#computerScore");
const playerChoiceElement = document.querySelector("#playerChoice");
const computerChoiceElement = document.querySelector("#computerChoice");
const roundElement = document.querySelector("#round");
const choices = document.querySelectorAll(".choice");

let rounds = 5;
let currentRound = 0;
let playerScore = 0;
let computerScore = 0;
let matchFinish = false;

function playRound(playerChoice, computerChoice){
    if(!matchFinish){
        const winner = checkWinner(playerChoice, computerChoice);

        switch (winner) {
            case "Equal":
                
                break;
            case "Player":
                playerScore++;
                break;
            case "Computer":
                computerScore++;
                break;
        }

        currentRound++;
        updateDisplay(playerChoice, computerChoice);
        if(currentRound >= rounds){endGame();}
    }
}

function endGame(){
    matchFinish = true;

    setTimeout(function(){
        if(playerScore === computerScore){
            alert("NOBODY WON!");
        }else if(playerScore > computerScore){
            alert("YOU WON!");
        }else{
            alert("COMPUTER WON!");
        }
    }, 1000);
}

function updateDisplay(playerChoice, computerChoice){
    playerScoreElement.innerText = playerScore;
    computerScoreElement.innerText = computerScore
    playerChoiceElement.innerText = playerChoice;
    computerChoiceElement.innerText = computerChoice;
    roundElement.innerText = `ROUND ${currentRound}/${rounds}`;
}

function checkWinner(playerChoice, computerChoice){
    let winner;

    if(playerChoice === computerChoice)
    {
        winner = "Equal";
    }else
    {
        if(playerChoice === "ROCK" && computerChoice === "SCISSORS"){
            winner = "Player";
        }else if(playerChoice === "ROCK" && computerChoice === "PAPER"){
            winner = "Computer";
        }else if(playerChoice === "PAPER" && computerChoice === "SCISSORS"){
            winner = "Computer";
        }else if( playerChoice === "PAPER" && computerChoice === "ROCK"){
            winner = "Player";
        }else if(playerChoice === "SCISSORS" && computerChoice === "ROCK"){
            winner = "Computer";
        }else{
            winner = "Player";
        }
    }

    return winner;
}

function playerChoice(value){
    if(matchFinish){return}
    
    let choice;
    
    switch (value) {
        case "ROCK":
            choice = "ROCK";
            break;
        case "PAPER":
            choice = "PAPER";
            break;
        case "SCISSORS":
            choice = "SCISSORS";
            break;
    }
    console.log(choice);
    return choice;
}

function computerChoice(){
    const choice = Math.floor(Math.floor(Math.random() * 3));
    
    let valueChoice;

    switch(choice){
        case 0:
            valueChoice = "ROCK";
            break;
        case 1:
            valueChoice = "PAPER";
            break;
        case 2:
            valueChoice = "SCISSORS";
            break;
    }
    return valueChoice;
}


// choices.forEach((btn) => btn.addEventListener("click", playerChoice));

choices.forEach((btn) => btn.addEventListener("click", function(){
    playRound(playerChoice(btn.textContent), computerChoice());
}));

