let userScore = 0;
let computerScore = 0;

const humanSelection = "rock";
const computerSelection = getComputerChoice();

console.log("Human:", humanSelection);
console.log("Computer:", computerSelection);

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  if (number === 0) {
    console.log("rock");
    return "rock";
  }

  if (number === 1) {
    console.log("paper");
    return "paper";
  }

  console.log("scissors");
  return "scissors";
}

function getUserChoice() {
  const solution = prompt("Chose by typing: rock, paper or scissors");
  if (solution === "rock" || solution === "paper" || solution === "scissors") {
    console.log(solution);
    return solution;
  }
  console.log("You need to chose from: rock, paper or scissors!");
}

function playRound(userChoice, computerChoice) {
  if (userChoice === "rock" && computerChoice === "paper") {
    console.log("You lose, paper beats rock!");
    computerScore++;
  }
  if (userChoice === "rock" && computerChoice === "scissors") {
    console.log("You win, rock beats scissors!");
    userScore++;
  }
  if (userChoice === "rock" && computerChoice === "rock") {
    console.log("Draw, rock vs rock!");
  }
  if (userChoice === "scissors" && computerChoice === "paper") {
    console.log("You win, scissors beats rock!");
    userScore++;
  }
  if (userChoice === "scissors" && computerChoice === "scissors") {
    console.log("Draw, scissors vs scissors!");
  }
  if (userChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose, rock beats scissors!");
    computerScore++;
  }
  if (userChoice === "paper" && computerChoice === "paper") {
    console.log("Draw, paper vs paper!");
  }
  if (userChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose, scissors beats paper!");
    computerScore++;
  }
  if (userChoice === "paper" && computerChoice === "rock") {
    console.log("You win, paper beats rock!");
    userScore++;
  }
  return true;
}

// function playGame () {

// console.log("Start, human score: " + humanScore + " computer score: " + computerScore);
// for (let i = 0; i < 5; i++) {
// console.log("Round: " + i+1 + ", human score: " + humanScore + " computer score: " + computerScore);

// getHumanChoice(solution);
// getComputerChoice();
// playRound()
// }

// console.log("Final, human score: " + humanScore + " computer score: " + computerScore);

// return (humanScore, computerScore);
// }

playRound(humanSelection, computerSelection);
