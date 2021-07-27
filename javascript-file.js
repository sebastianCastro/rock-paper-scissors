let i = 1;
let playerCount = 0;
let computerCount = 0;
let computerHand = ["rock", "paper", "scissors"];
let playerWins = "Hooman wins!";
let computerWins = "Computer wins!";
let tie = "Tie!"
let winner = document.getElementById("round-winner");
let scoreStr = document.getElementById("score");
let roundCounter = document.getElementById("round-counter");
let displayHands = document.getElementById("display-hands")

function roundWinner(playerSelection, computerSelection) {
    rockBtn.style.backgroundColor = "rgba(255, 255, 255, 0)";
    paperBtn.style.backgroundColor = "rgba(255, 255, 255, 0)";
    scissorsBtn.style.backgroundColor = "rgba(255, 255, 255, 0)";
    if (playerSelection == "rock-btn") {
        rockBtn.style.backgroundColor = "#2943F3";
        if (computerSelection == "rock") {
            winner.textContent = tie;
        } else if (computerSelection == "paper") {
            winner.textContent = computerWins;
        } else {
            winner.textContent = playerWins;
        }
    } else if (playerSelection == "paper-btn") {
        paperBtn.style.backgroundColor = "#2943F3";
        if (computerSelection == "rock") {
            winner.textContent = playerWins;
        } else if (computerSelection == "paper") {
            winner.textContent = tie;
        } else {
            winner.textContent = computerWins;
        }
    } else if (playerSelection == "scissors-btn") {
        scissorsBtn.style.backgroundColor = "#2943F3";
        if (computerSelection == "rock") {
            winner.textContent = computerWins;
        } else if (computerSelection == "paper") {
            winner.textContent = playerWins;
        } else {
            winner.textContent = tie;
        }
    } else {
        console.log("invalid input");
    }
}

function score() {
    if (winner.textContent !== "Tie!") {
        if (winner.textContent == playerWins) {
            playerCount ++;
            i ++;
        } else {
            computerCount ++;
            i ++;
        }
    }
    scoreStr.textContent = playerCount + " - " + computerCount;
}

function counter() {
    if (i > 5){
        restartBtn.style.visibility = "visible";
        if (playerCount > computerCount) {
            roundCounter.textContent = "You won";
        } else if (computerCount > playerCount) {
            roundCounter.textContent = "Computer won";
        } else {
            roundCounter.textContent = "Nobody wins, it's a tie";

        }
    } else if (i == 5) {
        roundCounter.textContent = "Final Round";
    } else {
        roundCounter.textContent = "Round: ".concat(i);
    }
}

function showPlayerHand(playerSelection) {
    if (playerSelection == "rock-btn") {
        displayHands.textContent = "Rock";
    } else if (playerSelection == "paper-btn") {
        displayHands.textContent = "Paper";
    } else {
        displayHands.textContent = "Scissors";
    }
}

function showComputerHand(computerSelection) {
    if (computerSelection == "rock") {
        displayHands.textContent = displayHands.textContent + " " + "Rock";
    } else if (computerSelection == "paper") {
        displayHands.textContent = displayHands.textContent + " " + "Paper";
    } else {
        displayHands.textContent = displayHands.textContent + " " + "Scissors";
    }
}

function showHands(playerSelection, computerSelection) {
    showPlayerHand(playerSelection);
    showComputerHand(computerSelection);
}

function restartGame() {
    i = 1;
    playerCount = 0;
    computerCount = 0;
    roundCounter.textContent = "Round: 1";
    scoreStr.textContent = playerCount + " - " + computerCount;
    displayHands.textContent = "";
    rockBtn.style.backgroundColor = "rgba(255, 255, 255, 0)";
    paperBtn.style.backgroundColor = "rgba(255, 255, 255, 0)";
    scissorsBtn.style.backgroundColor = "rgba(255, 255, 255, 0)";
    restartBtn.style.visibility = "hidden";
}

function game(e, playerSelection, computerSelection) {
    playerSelection = e.target.id;
    computerSelection = computerHand[Math.floor(Math.random() * 3)];
    showHands(playerSelection, computerSelection);
    roundWinner(playerSelection, computerSelection);
    score(playerSelection, computerSelection);
    counter();
}

let playerButtons = document.getElementById("player-buttons");

let rockBtn = document.getElementById("rock-btn");
rockBtn.style.cursor = "pointer";
rockBtn.addEventListener("click", game);

let paperBtn = document.getElementById("paper-btn");
paperBtn.style.cursor = "pointer";
paperBtn.addEventListener("click", game);

let scissorsBtn = document.getElementById("scissors-btn");
scissorsBtn.style.cursor = "pointer";
scissorsBtn.addEventListener("click", game);

let restartBtn = document.getElementById("restart-btn");
restartBtn.style.visibility = "hidden";
restartBtn.textContent = "Restart Game";
restartBtn.addEventListener("click", restartGame);
