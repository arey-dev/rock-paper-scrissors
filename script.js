/**
 * Performs mulitple rounds of Rock Paper Scissors base on user input
 * Keeps a score of player and computer in all rounds.
 * 
 * @return {string} returns the score and winner of the game
 * @todo create helper functions that handles multiple rounds
 */
function game() {
  let playerScore = 0, computerScore = 0;

  announceWinner(playerScore, computerScore);
}

/**
 * Announces the winner of the game
 * 
 * @param {number} playerScore score of the player
 * @param {number} computerScore score of the computer
 */
function announceWinner(playerScore, computerScore) {
  console.log(`Game ends! Final scores are, Player: ${playerScore} Computer: ${computerScore}`);

  if(playerScore > computerScore) console.log("Player Wins");
  else if(playerScore < computerScore) console.log("Computer Wins");
  else console.log("No one wins! It's a draw!");
}

/**
 * Plays a single round of Rock Paper Scissors
 * 
 * @param {string} playerSelection a choice of hand to play, not case sensitive
 * @param {string} computerSelection computer generated choice of hand to play
 * @return {string} returns a string that says wether or not the player wins
 * 
 * @todo change the return value for each case
 * @todo alert or log to console the result of round
 */
function playRound(playerSelection, computerSelection) {
  // capitalize player input
  const playerChoice = playerSelection.charAt(0).toUpperCase()
                      + playerSelection.substring(1).toLowerCase();

  if(playerChoice == computerSelection) {
    return "It's a draw";
  }

  switch(playerChoice) {
    case "Rock":
      if(computerSelection == "Scissors") {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
      } else if(computerSelection == "Paper") {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
      }
    case "Paper":
      if(computerSelection == "Rock") {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
      } else if(computerSelection == "Scissors") {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
      }
    case "Scissors":
      if(computerSelection == "Paper") {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
      } else if(computerSelection == "Rock") {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
      }
  }
}

/**
 * Randomly generates a choice for computer to play
 * 
 * @return {string} returns a string, either "Rock", "Paper", or "Scissors"
 */
function getComputerChoice() {
  const num = randomNumber();

  if(num == 1) return "Rock";
  if (num == 2) return "Paper";
  if (num == 3) return "Scissors"
}

/**
 * Generate random number from 1 to 3
 * 
 * @return {number} must be integer
 */
function randomNumber() {
  let rand = 0.5 + Math.random() * 3;

  return Math.round(rand);
}