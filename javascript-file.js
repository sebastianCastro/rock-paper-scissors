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

function roundWinner(playerSelection, computerSelection) {
    if (playerSelection == "rock-btn") {
        if (computerSelection == "rock") {
            winner.textContent = tie;
        } else if (computerSelection == "paper") {
            winner.textContent = computerWins;
        } else {
            winner.textContent = playerWins;
        }
    } else if (playerSelection == "paper-btn") {
        if (computerSelection == "rock") {
            winner.textContent = playerWins;
        } else if (computerSelection == "paper") {
            winner.textContent = tie;
        } else {
            winner.textContent = computerWins;
        }
    } else if (playerSelection == "scissors-btn") {
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
        roundCounter.textContent = "";
        restartBtn.style.visibility = "visible";
    } else if (i == 5) {
        roundCounter.textContent = "Final Round";
    } else {
        roundCounter.textContent = "Round: ".concat(i);
    }
}

function hiddeBtns(playerSelection) {
    if (playerSelection == "rock-btn") {
        paperBtn.style.visibility = "hidden";
        scissorsBtn.style.visibility = "hidden";
    } else if (playerSelection == "paper-btn") {
        rockBtn.style.visibility = "hidden";
        scissorsBtn.style.visibility = "hidden";
    } else {
            rockBtn.style.visibility = "hidden";
            paperBtn.style.visibility = "hidden";
    }
}

function restartGame() {
        playerCount = 0;
        computerCount = 0;
        scoreStr.textContent = playerCount + " - " + computerCount;
}

function game(e, playerSelection, computerSelection) {
    playerSelection = e.target.id;
    hiddeBtns(playerSelection);
    computerSelection = computerHand[Math.floor(Math.random() * 3)];
    roundWinner(playerSelection, computerSelection);
    score(playerSelection, computerSelection);
    counter();
}

let rockBtn = document.getElementById("rock-btn");
rockBtn.textContent = "Rock";
rockBtn.addEventListener("click", game);

let paperBtn = document.getElementById("paper-btn");
paperBtn.textContent = "Paper";
paperBtn.addEventListener("click", game);

let scissorsBtn = document.getElementById("scissors-btn");
scissorsBtn.textContent = "scissors";
scissorsBtn.addEventListener("click", game);

let restartBtn = document.getElementById("restart-btn");
restartBtn.style.visibility = "hidden";
restartBtn.textContent = "Restart Game";
restartBtn.addEventListener("click", restartGame);