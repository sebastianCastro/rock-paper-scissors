let computerHand = ["rock", "paper", "scissors"];
let hoomanWins = "Hooman wins!";
let hoomanCount = 0;
let computerWins = "Computer wins!"
let computerCount = 0;
let tie = "Tie!"

function playRound(playerSelection, computerSelection) {
    let roundWinner = document.getElementById("round-winner");
    if (playerSelection == "rock-btn") {
        if (computerSelection == "rock") {
            roundWinner.textContent = tie;
        } else if (computerSelection == "paper") {
            roundWinner.textContent = computerWins;
            computerCount ++;
        } else {
            roundWinner.textContent = hoomanWins;
            hoomanCount ++;
        }
    } else if (playerSelection == "paper-btn") {
        if (computerSelection == "rock") {
            roundWinner.textContent = hoomanWins;
            hoomanCount ++;
        } else if (computerSelection == "paper") {
            roundWinner.textContent = tie;
        } else {
            roundWinner.textContent = computerWins;
            computerCount ++;
        }
    } else if (playerSelection == "scissors-btn") {
        if (computerSelection == "rock") {
            roundWinner.textContent = computerWins;
            computerCount ++;
        } else if (computerSelection == "paper") {
            roundWinner.textContent = hoomanWins;
            hoomanCount ++;
        } else {
            roundWinner.textContent = tie;
        }
    } else {
        console.log("invalid input");
    }
}

// function winner(hoomanCount, computerCount) {
//     if (hoomanCount > computerCount) {
//         console.log(hoomanWins);
//     } else if (computerCount > hoomanCount) {
//         console.log(computerWins);
//     } else {
//         console.log(tie);
//     }
// }

function game(e, playerSelection, computerSelection) {
    playerSelection = e.target.id;
    computerSelection = computerHand[Math.floor(Math.random() * 3)];
    playRound(playerSelection, computerSelection);
    let score = document.getElementById("score");
    let scoreStr = "";
    score.textContent = scoreStr.concat(hoomanCount, " - ", computerCount);
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
