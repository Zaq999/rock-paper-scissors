let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let computerSelection;
let humanSelection;
let gameRound;


 
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

function getHumanChoice() {
    humanChoice = window.prompt("Choose your weapon(rock, paper, scissors):").toLowerCase();
    if(humanChoice === null) {
        console.log('You need to type in your weapon!');
    }
    return humanChoice;
}

function playRound(human, computer) {
    switch(true) {
        case human == 'rock' && computer == 'rock':
            console.log("Computer chose Rock. It's a tie!")
            console.log("Score: Player", humanScore, "", "Computer:" ,computerScore);
            break;
        case human == 'rock' && computer == 'paper':
            console.log("Computer chose Paper. You loose!")
            computerScore ++;
            gameRound++;
            console.log("Score: Player", humanScore, "", "Computer:" ,computerScore);
            break;
        case human == 'rock' && computer == 'scissors':
            console.log('Computer chose Scissors. You win!');
            humanScore ++;
            gameRound++;
            console.log("Score: Player", humanScore, "", "Computer:" ,computerScore);
            break;
        case human == 'paper' && computer == 'rock':
            console.log('Computer chose Rock. You win!');
            humanScore ++;
            gameRound++;
            console.log("Score: Player", humanScore, "", "Computer:" ,computerScore);
            break;
        case human == 'paper' && computer =='paper':
            console.log("Computer chose Paper. It's a tie!")
            console.log("Score: Player", humanScore, "", "Computer:" ,computerScore);
            break;
        case human =='paper' && computer == 'scissors':
            console.log('Computer chose Scissors. You Loose!');
            computerScore ++;
            gameRound++;
            console.log("Score: Player", humanScore, "", "Computer:" ,computerScore);
            break;
        case human == 'scissors' && computer == 'rock':
            console.log('Computer chose Rock. You loose')
            computerScore ++;
            gameRound++;
            console.log("Score: Player", humanScore, "", "Computer:" ,computerScore);
            break;
        case human == 'scissors' && computer == 'paper':
            console.log("Computer chose Paper. You win!");
            humanScore ++;
            gameRound++;
            console.log("Score: Player", humanScore, "", "Computer:" ,computerScore);
            break;
        case human == 'scissors' && computer == 'scissors':
            console.log("Computer chose Scissors. It's a tie!")
            console.log("Score: Player", humanScore, "", "Computer:" ,computerScore);
        default:
            console.log('Whoever gets 5 points wins!')            
    }
     
}

function playGame() {
    while ((humanScore <= 4 && computerScore <= 4) )
    {
        playRound(humanSelection, computerSelection);
        computerSelection = getComputerChoice();
        
        if((humanScore <= 4 && computerScore <= 4)) {
            humanSelection = getHumanChoice();
        }

        if(humanScore == 5) {
            console.log('Congratulations! You won! Reload this page to play again.');
        }
        
        if(computerScore == 5) {
            console.log('Game Over! Computer won! Reload this page to try again.');
        }
    }
}

playGame();
  
    

 



 
