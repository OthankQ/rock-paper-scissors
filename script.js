let playerWinCount = 0;
let computerWinCount = 0;
let totalRoundCount = 0;

const rockButton = document.querySelector('#rock')
const paperButton = document.querySelector('#paper')
const scissorsButton = document.querySelector('#scissors')
const resultsDiv = document.querySelector('.results');
const playerButtons = document.querySelectorAll('.player-button');
const playerWinDiv = document.querySelector('.player-wins');
const computerWinDiv = document.querySelector('.computer-wins');
const computerChoice = document.querySelector('.computer-choice');
const finalResultDiv = document.querySelector('.final-result');

// randomly return either 'rock', 'paper', or 'scissors.'
// Input: none
// Output: String type, 'Rock' or 'Papaer' or 'Scissors'
function computerPlay() {
    // Create a random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1
    // Depending on the number, decide what the play will be
    let play;
    switch (randomNumber) {
        case 1:
            play = 'Rock'
            break;
        case 2:
            play = 'Paper'
            break;
        case 3:
            play = 'Scissors'
            break;
        default:
            play = 'Sorry, something went wrong.'
    }

    computerChoice.textContent = play;
    return play;
}

// Function that plays a single round of rock paper scissors
// Input: String of the player's selection: rock or paper or scissors, case insensitive,
// And the return value of the computerPlay.
function playSingleRound(playerSelection, computerSelection) {
    // Compare playerSelection and computerSelection
    // If playerSelection is 'rock', player wins if computerSelection is 'scissors'
    // If computer Selection is 'paper' the player loses and computer wins.
    // Else, 'if computer selection is 'rock', it's a draw.
    let gameResult;
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    let computerSelectionLowerCase = computerSelection.toLowerCase();
    console.log('Player:', playerSelectionLowerCase,',', 'Computer:', computerSelectionLowerCase);

    if (playerSelectionLowerCase === 'rock') {
        if (computerSelectionLowerCase === 'paper') {
            gameResult = 'Computer Wins!'
        } else if (computerSelectionLowerCase === 'scissors') {
            gameResult = 'Player Wins!'
        } else {
            gameResult = 'It\'s a draw!';
        }
    } else if (playerSelectionLowerCase === 'paper') {
        if (computerSelectionLowerCase === 'scissors') {
            gameResult = 'Computer Wins!'
        } else if (computerSelectionLowerCase === 'rock') {
            gameResult = 'Player Wins!'
        } else {
            gameResult = 'It\'s a draw!';
        }
    } else if (playerSelectionLowerCase === 'scissors') {
        if (computerSelectionLowerCase === 'rock') {
            gameResult = 'Computer Wins!'
        } else if (computerSelectionLowerCase === 'paper') {
            gameResult = 'Player Wins!'
        } else {
            gameResult = 'It\'s a draw!';
        }
    } else {
        gameResult = 'That\'s not a real hand. Please try again.';
    }

    determineRoundWinner(gameResult);

    return gameResult;
}

function determineGameWinner(playerWinCount, computerWinCount) {
    if (playerWinCount === 5 || computerWinCount === 5){
        playerButtons.forEach(button => button.disabled = true);
        if (playerWinCount > computerWinCount) {
            return 'Congratulations! You won the game!';
        } else if (playerWinCount < computerWinCount) {
            return 'All hail our computer overlords.';
        }
    }
}

function determineRoundWinner(string) {
    if (string === 'Player Wins!') {
        playerWinCount ++;
    } else if (string === 'Computer Wins!'){
        computerWinCount ++;
    }
}

function logInnerText(event) {
    console.log(event.target.innerText.toLowerCase());
}


playerButtons.forEach(button => {
    button.addEventListener('click', e => {
        let roundResult = playSingleRound(e.target.innerText.toLowerCase(), computerPlay());
        resultsDiv.textContent = `${roundResult}`;
        // Display win counts
        playerWinDiv.textContent = playerWinCount;
        computerWinDiv.textContent = computerWinCount;
        finalResultDiv.textContent =  determineGameWinner(playerWinCount, computerWinCount);
    });
})