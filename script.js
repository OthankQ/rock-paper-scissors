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

    return gameResult;
}


// Starts a game, plays for 5 rounds, keeps scores and lets the player know every end of round.
function game() {

    let playerWinCount = 0;
    let computerWinCount = 0;

    // Keep a counter that increments by one until it reaches 5
    for (let i = 1; i < 6; i ++) {
        // play one round of game
        let playerHand = prompt('What hand will you play? You can choose between rock, paper or scissors');
        let result = playSingleRound(playerHand, computerPlay());

        // If player wins, increment the player's win count
        if (result === 'Player Wins!') {
            playerWinCount += 1;
        // else: increment the computer's win count.
        } else if (result === 'Computer Wins!') {
            computerWinCount += 1;
        }
        // If it's a draw, or a not a real hand, don't increment any counters
        console.log(`Total Wins: player: ${playerWinCount}, computer: ${computerWinCount}`);
    }

    if (playerWinCount > computerWinCount) {
        console.log('Congratulations! You won the game!');
    } else if (playerWinCount < computerWinCount) {
        console.log('All hail our computer overlords.');
    } else {
        console.log('It\'s a tie!');
    }

}

game();