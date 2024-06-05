function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3);
    if (numChoice == 0) 
        return "rock"; 
    else if (numChoice == 1)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Please type your choice of rock, paper, or scissors").toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors") 
    {
        choice = prompt("Please type your choice of rock, paper, or scissors").toLowerCase();
    }
    return choice;
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie! Both picked " + humanChoice);
        return 0;
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        console.log("You win! " + humanChoice + " beats "+ computerChoice + ".")
        return 1;
    } else {
        console.log("You lose! " + computerChoice + " beats "+ humanChoice + ".")
        return 2;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let result;
    for (let round = 1; round <= 5; round++) {
        result = playRound(getHumanChoice(), getComputerChoice());
        if (result == 1) {
            humanScore++;
        }
        else if (result == 2) {
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        console.log("You win! " + humanScore + " to " + computerScore);
    } else if (computerScore > humanScore) {
        console.log("You lose! " + humanScore + " to " + computerScore);
    } else {
        console.log("Tie! " + humanScore + " to " + computerScore);
    }
}

playGame();