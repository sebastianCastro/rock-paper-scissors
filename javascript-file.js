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
        buttonsDiv.style.visibility = "hidden";
        restartBtn.style.visibility = "visible";
    } else if (i == 5) {
        roundCounter.textContent = "Final Round";
    } else {
        roundCounter.textContent = "Round: ".concat(i);
    }
}

// function hiddeBtns() {
//     rockBtn.style.visibility = "hidden";
//     paperBtn.style.visibility = "hidden";
//     scissorsBtn.style.visibility = "hidden";
// }

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
    i = 0;
    playerCount = 0;
    computerCount = 0;
    scoreStr.textContent = playerCount + " - " + computerCount;
    displayHands.textContent = "";
    winner.textContent = "";
    buttonsDiv.style.visibility = "visible";
    restartBtn.style.visibility = "hidden";
}

function game(e, playerSelection, computerSelection) {
    playerSelection = e.target.id;
    // hiddeBtns(playerSelection);
    computerSelection = computerHand[Math.floor(Math.random() * 3)];
    showHands(playerSelection, computerSelection);
    roundWinner(playerSelection, computerSelection);
    score(playerSelection, computerSelection);
    counter();
}

let buttonsDiv = document.getElementById("buttons-div");

let btns = document.getElementsByClassName("buttons");
let j;
for (j = 0; j < btns.length; j++) {
    btns[j].style.cursor = "pointer";
    btns[j].style.background = "#C0BCBB";
    btns[j].style.border = "none";
    btns[j].style.padding = "15px 32px";
    btns[j].style.fontSize = "16px";
    btns[j].style.margin = "4px 2px";
    btns[j].addEventListener("click", game);
  }

let rockBtn = document.getElementById("rock-btn");
rockBtn.textContent = "R";

let paperBtn = document.getElementById("paper-btn");
paperBtn.textContent = "P";

let scissorsBtn = document.getElementById("scissors-btn");
scissorsBtn.textContent = "S";

let restartBtn = document.getElementById("restart-btn");
restartBtn.style.visibility = "hidden";
restartBtn.textContent = "Restart Game";
restartBtn.addEventListener("click", restartGame);

let body = document.getElementById("body");
body.style.margin = 0;
body.style.padding = 0;

let container = document.getElementById("container-box");
container.style.height = "100vh";
container.style.margin = 0;
container.style.padding = 0;
container.style.border = 0;
container.style.background = "#00000";
