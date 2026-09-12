      alert("Script is executing!");
      console.log("Hello World");
// rock-paper-scissors
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
playGame();

console.log(getComputerChoice());
console.log(getHumanChoice());

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    if (number === 0)  {
    console.log("rock");
    return "rock"; }

    if (number === 1) {
        console.log("paper");
        return "paper"; }

    console.log("scissors");
    return "scissors";
}

function getHumanChoice() {
    const solution = prompt("Chose by typing: rock, paper or scissors");
    if (solution === "rock" || solution === "paper" || solution === "scissors") {
        console.log(solution);
        return solution;
    }
    console.log("You need to chose from: rock, paper or scissors!");
    return undefined;
}

function playRound(humanChoice, computerChoice) {
console.log(humanScore);
console.log(computerScore);
if (humanChoice === "rock" && computerChoice === "paper") { console.log("You lose, paper beats rock!");  computerScore++; };
if (humanChoice === "rock" && computerChoice === "scissors") { console.log("You win, rock beats scissors!");  humanScore++; };
if (humanChoice === "rock" && computerChoice === "rock") {console.log("Draw, rock vs rock!"); ; };
if (humanChoice === "scissors" && computerChoice === "paper") {console.log("You win, scissors beats rock!");  humanScore++; };
if (humanChoice === "scissors" && computerChoice === "scissors") {console.log("Draw, scissors vs scissors!");  };
if (humanChoice === "scissors" && computerChoice === "rock") { console.log("You lose, rock beats scissors!");  computerScore++; };
if (humanChoice === "paper" && computerChoice === "paper") { console.log("Draw, paper vs paper!");  };
if (humanChoice === "paper" && computerChoice === "scissors") { console.log("You lose, scissors beats paper!");  computerScore++; };
if (humanChoice === "paper" && computerChoice === "rock") {console.log("You win, paper beats rock!");  humanScore++; };
};


function playGame () {

console.log("Start, human score: " + humanScore + " computer score: " + computerScore);
for (let i = 0; i < 5; i++) {
console.log("Round: " + i+1 + ", human score: " + humanScore + " computer score: " + computerScore);

getHumanChoice(solution);
getComputerChoice();
playRound()
}

console.log("Final, human score: " + humanScore + " computer score: " + computerScore);

return (humanScore, computerScore);
}


