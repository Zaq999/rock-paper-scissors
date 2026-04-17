

let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let computerSelection;
let humanSelection;

const playerSelectionMsg = document.querySelector("#playerSelection");
const computerSelectionMsg = document.querySelector("#computerSelection");
const playerScore = document.querySelector("#playerScore");
const enemyScore = document.querySelector("#computerScore");
const roundResultMsg = document.querySelector("#result");
const gameResultMsg = document.querySelector("#gameResult")
 

function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3);
    
    if(randomChoice === 0) {
        computerChoice = "rock";
    }
    else if(randomChoice === 1) {
        computerChoice = "paper";
    }
    else
        computerChoice = "scissors";
        return computerChoice;
}



function playRound(human, computer) {
    switch(true) {
        case human == 'rock' && computer == 'rock':
        computerSelectionMsg.textContent = "Computer chose Rock.";
        roundResultMsg.textContent = "Rock versus Rock. It's a tie!";
        break;
            
        case human == 'rock' && computer == 'paper':
        computerSelectionMsg.textContent = "Computer chose Paper."
        computerScore ++;
        roundResultMsg.textContent= "Paper beats rock! Enemy wins!";
        break;
            
        case human == 'rock' && computer == 'scissors':
        computerSelectionMsg.textContent = 'Computer chose Scissors.';
        humanScore ++;
        roundResultMsg.textContent= "Rock beats Scissors! You win!";
        break;
        
        case human == 'paper' && computer == 'rock':
        computerSelectionMsg.textContent = 'Computer chose Rock.';
        humanScore ++;
        roundResultMsg.textContent= "Paper beats rock! You win!";
        break;
            
        case human == 'paper' && computer =='paper':
        computerSelectionMsg.textContent = "Computer chose Paper.";
        roundResultMsg.textContent= "Paper versus Paper! It's a tie!";
        break;
            
        case human =='paper' && computer == 'scissors':
        computerSelectionMsg.textContent = 'Computer chose Scissors.';
        computerScore ++;
        roundResultMsg.textContent= "Scissors beats paper! You loose!";
        break;
            
        case human == 'scissors' && computer == 'rock':
        computerSelectionMsg.textContent = 'Computer chose Rock.';
        computerScore ++;
        roundResultMsg.textContent= "Rock beats Scissors! You loose!";
        break;
            
        case human == 'scissors' && computer == 'paper':
        computerSelectionMsg.textContent = "Computer chose Paper.";
        humanScore ++;
        roundResultMsg.textContent= "Scissors beats paper! You win!";
        break;
            
        case human == 'scissors' && computer == 'scissors':
        computerSelectionMsg.textContent = "Computer chose Scissors.";
        roundResultMsg.textContent= "Scissors versus Scissors! It's a tie!";
        break; 
        }
}

function playAgain() {
    const winBtn = document.createElement("button")
    winBtn.setAttribute("id", "winBtn");
    winBtn.textContent = "Play Again!";
    resultContainer.appendChild(winBtn);
    winBtn.setAttribute("style", "margin-left: 5px");

    const btn = document.querySelector("#winBtn")
    btn.addEventListener("click", () => {
        location.reload();
        return;
    });
}

const resultContainer = document.querySelector("#gameResult");    
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function(event) {
        if(humanScore < 5 && computerScore < 5) {
            getComputerChoice();
            playRound(button.id, computerChoice);

            if(humanScore == 5) {
            gameResultMsg.textContent = "You won the game! Play Again?";
            playAgain();
            }
            else if (computerScore == 5) {
            gameResultMsg.textContent = "You lost the game! Try again?";
            playAgain();
            }
        };

        playerScore.textContent = `Player score: ${humanScore}`;
        enemyScore.textContent= `Computer score: ${computerScore}`;
    });
});

