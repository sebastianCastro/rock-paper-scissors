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
            winner = tie;
        } else if (computerSelection == "paper") {
            winner = computerWins;
        } else {
            winner = playerWins;
        }
    } else if (playerSelection == "paper-btn") {
        if (computerSelection == "rock") {
            winner = playerWins;
        } else if (computerSelection == "paper") {
            winner = tie;
        } else {
            winner = computerWins;
        }
    } else if (playerSelection == "scissors-btn") {
        if (computerSelection == "rock") {
            winner = computerWins;
        } else if (computerSelection == "paper") {
            winner = playerWins;
        } else {
            winner = tie;
        }
    } else {
        console.log("invalid input");
    }
}

function score() {
    if (winner !== "Tie!") {
        if (winner == playerWins) {
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
        rockBtn.style.visibility = "hidden";
        paperBtn.style.visibility = "hidden";
        scissorsBtn.style.visibility = "hidden";
        playerChoice[0].style.backgroundColor = "rgba(255, 255, 255, 0)";
        playerChoice[1].style.backgroundColor = "rgba(255, 255, 255, 0)";
        playerChoice[2].style.backgroundColor = "rgba(255, 255, 255, 0)";
    } else if (i == 5) {
        roundCounter.textContent = "Final Round";
    } else {
        roundCounter.textContent = "Round: ".concat(i);
    }
}

function showPlayerHand(playerSelection) {
    playerChoice[0].style.backgroundColor = "rgba(255, 255, 255, 0)";
    playerChoice[1].style.backgroundColor = "rgba(255, 255, 255, 0)";
    playerChoice[2].style.backgroundColor = "rgba(255, 255, 255, 0)";
    if (playerSelection == "rock-btn") {
        playerChoice[0].style.backgroundColor = "#18C8F5";
    } else if (playerSelection == "paper-btn") {
        playerChoice[1].style.backgroundColor = "#18C8F5";
    } else {
        playerChoice[2].style.backgroundColor = "#18C8F5";
    }
}

function showComputerHand(computerSelection) {
    computerChoice[0].style.backgroundColor = "rgba(255, 255, 255, 0)";
    computerChoice[1].style.backgroundColor = "rgba(255, 255, 255, 0)";
    computerChoice[2].style.backgroundColor = "rgba(255, 255, 255, 0)";
    if (computerSelection == "rock") {
        computerChoice[0].style.backgroundColor = "#F51865";
    } else if (computerSelection == "paper") {
        computerChoice[1].style.backgroundColor = "#F51865";
    } else {
        computerChoice[2].style.backgroundColor = "#F51865";
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
    playerChoice[0].style.backgroundColor = "rgba(255, 255, 255, 0)";
    playerChoice[1].style.backgroundColor = "rgba(255, 255, 255, 0)";
    playerChoice[2].style.backgroundColor = "rgba(255, 255, 255, 0)";
    computerChoice[0].style.backgroundColor = "rgba(255, 255, 255, 0)";
    computerChoice[1].style.backgroundColor = "rgba(255, 255, 255, 0)";
    computerChoice[2].style.backgroundColor = "rgba(255, 255, 255, 0)";
    rockBtn.style.visibility = "visible";
    paperBtn.style.visibility = "visible";
    scissorsBtn.style.visibility = "visible";
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

let playerChoice = document.getElementsByClassName("player-choice");
let computerChoice = document.getElementsByClassName("computer-choice");


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
