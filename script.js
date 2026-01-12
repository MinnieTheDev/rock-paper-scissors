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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const roundResult = document.createElement("p");

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
            roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        }
        else if (computerWins) {
            computerScore++;
            roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        }
        else {
            roundResult.textContent = `It's a draw, ${humanChoice} does not beat ${computerChoice}.`;
        }

        return(humanScore, computerScore)
    }

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.id, getComputerChoice());

            const result = document.querySelector("#result");
            result.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
            result.appendChild(roundResult);

            if (humanScore >= 5 || computerScore >= 5) {
                const gameResult = document.createElement("p");
                gameResult.textContent = `${humanScore > computerScore ? "Human" : "Computer"} won!`;
                result.appendChild(gameResult);
            }

        })
    })
}

playGame();