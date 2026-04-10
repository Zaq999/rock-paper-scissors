

let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let computerSelection;
let humanSelection;
let gameRound;

const playerSelectionMsg = document.querySelector("#playerSelection");
const computerSelectionMsg = document.querySelector("#computerSelection");
const score = document.querySelector("#score");
 
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
        computerSelectionMsg.textContent = "Computer chose Rock. It's a tie!"
        score.textContent = `Player score: ${humanScore}  Computer: ${computerScore}`;
        break;
            
        case human == 'rock' && computer == 'paper':
        computerSelectionMsg.textContent = "Computer chose Paper. You loose!"
        computerScore ++;
        gameRound++;
        score.textContent = `Player score: ${humanScore}  Computer: ${computerScore}`;
        break;
            
        case human == 'rock' && computer == 'scissors':
        computerSelectionMsg.textContent = 'Computer chose Scissors. You win!';
        humanScore ++;
        gameRound++;
        score.textContent = `Player score: ${humanScore}  Computer: ${computerScore}`;
        break;
        
        case human == 'paper' && computer == 'rock':
        computerSelectionMsg.textContent = 'Computer chose Rock. You win!';
        humanScore ++;
        gameRound++;
        score.textContent = `Player score: ${humanScore}  Computer: ${computerScore}`;
        break;
            
        case human == 'paper' && computer =='paper':
        computerSelectionMsg.textContent = "Computer chose Paper. It's a tie!";
        score.textContent = `Player score: ${humanScore}  Computer: ${computerScore}`;
        break;
            
        case human =='paper' && computer == 'scissors':
        computerSelectionMsg.textContent = 'Computer chose Scissors. You Loose!';
        computerScore ++;
        gameRound++;
        score.textContent = `Player score: ${humanScore}  Computer: ${computerScore}`;
        break;
            
        case human == 'scissors' && computer == 'rock':
        computerSelectionMsg.textContent = 'Computer chose Rock. You loose'
        computerScore ++;
        gameRound++;
        score.textContent = `Player score: ${humanScore}  Computer: ${computerScore}`;
            
        case human == 'scissors' && computer == 'paper':
        computerSelectionMsg.textContent = "Computer chose Paper. You win!";
        humanScore ++;
        gameRound++;
        score.textContent = `Player score: ${humanScore}  Computer: ${computerScore}`;
        break;
            
        case human == 'scissors' && computer == 'scissors':
        computerSelectionMsg.textContent = "Computer chose Scissors. It's a tie!";
        score.textContent = `Player score: ${humanScore}  Computer: ${computerScore}`;   
        break; 
        }
}

function playAgain() {
    const winBtn = document.createElement("button")
    winBtn.setAttribute("id", "winBtn");
    winBtn.textContent = "Play Again!";
    resultContainer.appendChild(winBtn);

    const btn = document.querySelector("#winBtn")
    btn.addEventListener("click", () => {
        location.reload();
    });
}

const resultContainer = document.querySelector("#gameResult");    
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function(event) {
        if(humanScore < 5 && computerScore < 5) {
            getComputerChoice();
            playRound(button.id, computerChoice);
            playerSelectionMsg.textContent = `You choose ${button.id}`;
        };

        if(humanScore == 5) {
          console.log("You won!"); 
          playAgain();

        }
        else if (computerScore == 5) {
            console.log("You lost! Try Again");
            playAgain();
        }
    });
})



    

 



 
