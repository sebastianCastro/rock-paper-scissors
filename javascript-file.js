let computerHand = ["rock", "paper", "scissors"];
let hoomanWins = "Hooman wins!";
let hoomanCount = 0;
let computerWins = "Computer wins!";
let computerCount = 0;
let tie = "Tie!"
let i = 1;
let winner = document.getElementById("round-winner");

function roundWinner(playerSelection, computerSelection) {
    if (playerSelection == "rock-btn") {
        if (computerSelection == "rock") {
            winner.textContent = tie;
        } else if (computerSelection == "paper") {
            winner.textContent = computerWins;
            computerCount ++;
        } else {
            winner.textContent = hoomanWins;
            hoomanCount ++;
        }
    } else if (playerSelection == "paper-btn") {
        if (computerSelection == "rock") {
            winner.textContent = hoomanWins;
            hoomanCount ++;
        } else if (computerSelection == "paper") {
            winner.textContent = tie;
        } else {
            winner.textContent = computerWins;
            computerCount ++;
        }
    } else if (playerSelection == "scissors-btn") {
        if (computerSelection == "rock") {
            winner.textContent = computerWins;
            computerCount ++;
        } else if (computerSelection == "paper") {
            winner.textContent = hoomanWins;
            hoomanCount ++;
        } else {
            winner.textContent = tie;
        }
    } else {
        console.log("invalid input");
    }
}

function score() {
    let scoreDiv = document.getElementById("score");
    let scoreStr = "";
    scoreDiv.textContent = scoreStr.concat(hoomanCount, " - ", computerCount);
}

// function counter(roundWinner) {
//     let roundCounter = document.getElementById("round-counter");
//     roundCounter.textContent = "Round: " + i;
//     if (i < 5) {
//         if (roundWinner != "Tie!" ) {
//             i ++
//         }
//     } else if (i = 5) {
//         if (hoomanCount > computerCount) {
//             winner.textContent = "Hooman wins the game.";
//         } else if (computerCount > hoomanCount) {
//             winner.textContent = "Computer wins the game.";
//         } else {
//             winner.textContent = "I'ts a tie."
//         }
//     }
// }


function game(e, playerSelection, computerSelection) {
    playerSelection = e.target.id;
    computerSelection = computerHand[Math.floor(Math.random() * 3)];
    counter();
    roundWinner(playerSelection, computerSelection);
    score();
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
