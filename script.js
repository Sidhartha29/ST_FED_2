const choices = document.querySelectorAll(".choice");
const resultText = document.getElementById("result-text");
const userScoreDiv = document.getElementById("user-score");
const computerScoreDiv = document.getElementById("computer-score");
const userChoiceText = document.getElementById("user-choice");
const computerChoiceText = document.getElementById("computer-choice");

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    displayResult(userChoice, computerChoice, winner);
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function getWinner(user, computer) {
  if (user === computer) return "draw";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    userScore++;
    return "user";
  } else {
    computerScore++;
    return "computer";
  }
}

function displayResult(user, computer, winner) {
  userScoreDiv.textContent = `You: ${userScore}`;
  computerScoreDiv.textContent = `Computer: ${computerScore}`;

  userChoiceText.textContent = `You chose: ${capitalize(user)}`;
  computerChoiceText.textContent = `Computer chose: ${capitalize(computer)}`;

  if (winner === "draw") {
    resultText.textContent = "It's a draw!";
  } else if (winner === "user") {
    resultText.textContent = `${capitalize(user)} beats ${computer}. You win!`;
  } else {
    resultText.textContent = `${capitalize(computer)} beats ${user}. You lose!`;
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
