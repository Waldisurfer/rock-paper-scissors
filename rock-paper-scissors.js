let userScore = 0;
let computerScore = 0;
let roundCounter = 0;

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3);
  if (number === 0) return "rock";
  if (number === 1) return "paper";
  return "scissors";
}

function getUserChoice() {
  const rawInput = prompt("Choose by typing: rock, paper or scissors");
  if (!rawInput) return null; // Handles clicking "Cancel"

  const solution = rawInput.trim().toLowerCase();
  if (solution === "rock" || solution === "paper" || solution === "scissors") {
    return solution;
  }
  console.log("You need to choose from: rock, paper or scissors!");
  return null;
}

function playRound(userChoice, computerChoice) {
  if (!userChoice || !computerChoice) return;

  if (userChoice === computerChoice) {
    console.log(`Draw, ${userChoice} vs ${computerChoice}!`);
    return;
  }

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    console.log(`You win, ${userChoice} beats ${computerChoice}!`);
  } else {
    computerScore++;
    console.log(`You lose, ${computerChoice} beats ${userChoice}!`);
  }
}

function playGame(roundCounter) {
  while (roundCounter <= 4) {
    const userSelection = getUserChoice();
    const computerSelection = getComputerChoice();
    playRound(userSelection, computerSelection);
    roundCounter++;
    console.log(
      `Round: ${roundCounter} Score -> User: ${userScore} | Computer: ${computerScore}`,
    );
  }
}


playGame(roundCounter);
