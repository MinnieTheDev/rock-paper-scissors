function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 100);

    let computerChoice;

    if (randomNumber <= 33) {
        computerChoice = "rock";
    }
    else if (randomNumber > 33 && randomNumber <= 66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors"
    }

    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Your move: ");

    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let humanWins = false;
    let computerWins = false;
    // if choice is same = draw
    if (humanChoice !=  computerChoice) {
        // human win conditions
        // human rock, computer scissors
        if (humanChoice == "rock" && computerChoice == "scissors") {
            humanWins = true;
        }
        // human paper, computer rock
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanWins = true;
        }
        // human scissors, computer paper
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanWins = true;
        }
        // else, computer wins
        else {
            computerWins = true;
        }
    }

    if (humanWins) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if (computerWins) {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
    else {
        console.log(`It's a draw, ${humanChoice} does not beat ${computerChoice}.`);
    }
}

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);