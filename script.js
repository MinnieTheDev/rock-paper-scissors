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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let humanWins = false;
        let computerWins = false;
        if (humanChoice !=  computerChoice) {
            if (humanChoice == "rock" && computerChoice == "scissors") {
                humanWins = true;
            }
            else if (humanChoice == "paper" && computerChoice == "rock") {
                humanWins = true;
            }
            else if (humanChoice == "scissors" && computerChoice == "paper") {
                humanWins = true;
            }
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

        return(humanScore, computerScore)
    }

    for (i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    return `Game Over. Human: ${humanScore}, Computer: ${computerScore}`;
}

console.log(playGame());