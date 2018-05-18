// INSTRUCTIONS: Build a command-line based zombie fighting game. 
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5. 
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again. 

// The game ends when you or the zombie gets to 0 health. 

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt. 

// ===========================================================================================================

var inquirer = require('inquirer');
var fileSys = require('fs');
var username, playerClass, playerHealth, playerMana, mobName, mobHealth, score, difficulty;

function gameInit() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Welcome back to the early 1990s!',
            choices: ['Start Game', 'View High Scores'],
            name: 'userChoice'
        }
    ])
    .then(function (response) {
        if (response.userChoice === 'Start Game') {
            newGame();
        } else {
            showHighScores();
        }
    })
}

function newGame() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What's your name?",
            name: 'username'
        },
        {
            type: 'list',
            message: 'Choose your character:',
            choices: ['Beef McHardbody', 'Zixerion the Mysterious', 'The Derp Fox'],
            name: 'class'
        },
        {
            type: 'list',
            message: 'Select difficulty:',
            choices: ['Easy', 'Hard', 'Fuck me up fam'],
            name: 'difficulty'
        }
    ])
    .then(function(response) {
        username = response.username;
        playerClass = response.class;
        console.log(`${response.username} the valiant ${response.class}, good luck on your quest!`)

        switch(response.difficulty) {//SETTING DIFFICULTY VAR
            case 'Easy':
                difficulty = 0;
                break;
            case 'Hard':
                difficulty = 0.25;
                break;
            case 'Fuck me up fam':
                difficulty = 0.5;
                break;
        }
        gamePlay();
    })
}

function gamePlay() {
    var mobId = Math.random() + difficulty;
    switch (true) {//SETTING MONSTER
        case(mobId > 1.5):
            mobName = 'Warchief';
            break;
        case(mobId > 1.1):
            mobName = 'Fimir';
            break;
        case(mobId > 0.8):
            mobName = 'Orc';
            break;
        default: 
            mobName = 'Goblin';
            break;
    }

    inquirer.prompt([

    ])
}

gameInit();