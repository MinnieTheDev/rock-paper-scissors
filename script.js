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

    return humanChoice;
}

getComputerChoice();