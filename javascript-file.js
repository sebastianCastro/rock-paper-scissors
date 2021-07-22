let computerHand = ["rock", "paper", "scissors"];
let hoomanWins = "Hooman wins!";
let hoomanCount = 0;
let computerWins = "Computer wins!";
let computerCount = 0;
let tie = "Tie!"
let i = 2;
let winner = document.getElementById("round-winner");

function roundWinner(playerSelection, computerSelection) {
    if (playerSelection == "rock-btn") {
        if (computerSelection == "rock") {
            winner.textContent = tie;
        } else if (computerSelection == "paper") {
            winner.textContent = computerWins;
        } else {
            winner.textContent = hoomanWins;
        }
    } else if (playerSelection == "paper-btn") {
        if (computerSelection == "rock") {
            winner.textContent = hoomanWins;
        } else if (computerSelection == "paper") {
            winner.textContent = tie;
        } else {
            winner.textContent = computerWins;
        }
    } else if (playerSelection == "scissors-btn") {
        if (computerSelection == "rock") {
            winner.textContent = computerWins;
        } else if (computerSelection == "paper") {
            winner.textContent = hoomanWins;
        } else {
            winner.textContent = tie;
        }
    } else {
        console.log("invalid input");
    }
}

function score(playerSelection, computerSelection) {
    let scoreDiv = document.getElementById("score");
    let scoreStr = "";
    if (playerSelection || computerSelection !== "Tie!") {
        if (winner.textContent == hoomanWins) {
            hoomanCount ++;
            i ++;
        } else {
            computerCount ++;
            i ++;
        }
    }
    scoreDiv.textContent = scoreStr.concat(hoomanCount, " - ", computerCount);
}

function counter() {
    let roundCounter = document.getElementById("round-counter");
    if (i == 5) {
        roundCounter.textContent = "Final Round";
    } else {
        roundCounter.textContent = "Round: " + i;
    }
}

// function resetGame() {
//     if (hoomanCount || computerCount > 5) {
//         roundCounter.textContent = "Round: 1";
//         hoomanCount = 0;
//         computerCount = 0;
//         winner.textContent = "Choose wisely";
//     }
// }

// else {
//     if (hoomanCount > computerCount) {
//         winner.textContent = "Hooman wins the game.";
//     } else if (computerCount > hoomanCount) {
//         winner.textContent = "Computer wins the game.";
//     } else {
//         winner.textContent = "I'ts a tie."
//     }
// }


function game(e, playerSelection, computerSelection) {
    playerSelection = e.target.id;
    computerSelection = computerHand[Math.floor(Math.random() * 3)];
    counter();
    roundWinner(playerSelection, computerSelection);
    score(playerSelection, computerSelection);
    // resetGame();
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
