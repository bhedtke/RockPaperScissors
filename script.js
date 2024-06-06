const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
let roundsPlayed = 0;
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3);
    if (numChoice == ROCK) 
        return "rock"; 
    else if (numChoice == PAPER)
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



function playRound(humanChoice, computerChoice = getComputerChoice()) {
    if (humanChoice == computerChoice) {
        document.getElementById("result").innerText = "Tie! Both picked " + humanChoice;
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        document.getElementById("result").innerText = "You win! " + humanChoice + " beats "+ computerChoice;
        humanScore++;
    } else {
        document.getElementById("result").innerText = "You lose! " + computerChoice + " beats "+ humanChoice
        computerScore++;
    }
    roundsPlayed++;
    document.getElementById("score").innerText = `Score: You- ${humanScore} Computer- ${computerScore}`;
    if (roundsPlayed == 5)
    {
        let result = 'Tied Game.';
        if (humanScore > computerScore) result = "You win.";
        if (computerScore > humanScore) result = "Computer wins.";
        alert(`5 rounds played. ${result} Play again?`);
        roundsPlayed = 0;
        humanScore = 0;
        computerScore = 0;
        document.getElementById("result").innerText = '';
        document.getElementById("score").innerText = 'Score: You- 0 Computer- 0';
    }
}




let buttons = document.querySelectorAll('.buttongroup button')
buttons.forEach(button => {
    button.addEventListener("click", () => {playRound(button.id)});
});
